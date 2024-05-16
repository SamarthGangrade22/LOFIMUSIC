const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/song");
const User = require("../models/user");

router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const { name, track, thumbnail } = req.body;
    if (!name || !thumbnail || !track) {
        return res.status(400).json({ error: "Insufficient details to create song" });
    }
    const artist = req.user._id;
    const songDetails = { name, track, thumbnail, artist };

    try {
        const createSong = await Song.create(songDetails);
        return res.status(200).json(createSong);
    } catch (error) {
        console.error("Error creating song:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/get/mysongs", passport.authenticate("jwt", { session: false }), async (req, res) => {
    
    const songs = await Song.find({artist: req.user._id}).populate(
        "artist"
    );
    return res.status(200).json({data: songs});
});


router.get("/get/artist/:artistId", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const {artistId}=req.params;
        const artist =await User.findOne({_id:artistId});
        if(!artist){
            return res.status(301).json({err:"Artist does not exist"});
        }
        const songs = await Song.find({ artist: artistId }).lean();
        return res.status(200).json({ data: songs });
    } catch (error) {
        console.error("Error fetching songs:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get("/get/songname/:songName", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const {songName}=req.params;  
        //Pattern matching instead of direct name matching     
        const songs = await Song.find({ name: songName }).populate("artist");
        return res.status(200).json({ data: songs });
    } catch (error) {
        console.error("Error fetching songs:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


 
module.exports = router;
