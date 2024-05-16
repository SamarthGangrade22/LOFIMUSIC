const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helper");

router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { email, password, firstname, lastname, username } = req.body;

    try {
        let user = await User.findOne({ email: email });
        if (user) {
            return res.status(403).json({ error: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUserData = {
            email,
            password: hashedPassword,
            firstname,
            lastname,
            username
        };
        const newUser = await User.create(newUserData);

        //creating jwt token
        const token = await getToken(email, newUser);

        const userToReturn = { ...newUser.toJSON(), token };
        delete userToReturn.password;
        return res.status(200).json(userToReturn);
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


router.post("/login", async (req, res) => {
    const {email,password}=req.body;

    const user = await User.findOne({email:email});

    
    if(!user){
        return res.status(403).json({err:"Invalid credentials"});
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch){
        return res.status(403).json({err:"Invalid credentials"});
 
    }
    const token = await getToken(user.email, user);
    const userToReturn = { ...user.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});

module.exports = router;
