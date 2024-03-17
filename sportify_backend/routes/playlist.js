const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const Playlist=require("../models/playlist");


router.post("/create",passport.authenticate("jwt", { session: false }), async (req, res)=>{
    const currentUser=req.user;
    const {name,thumbnail,songs}=req.body;
    const playlistData={
        name,
        thumbnail,
        songs,
        owner:currentUser._id,
        collaborators:[],
    };
    const playlist=Playlist.create(playlistData);
    return res.status(200).json(playlist);
});

router.post("/get/:playlist",passport.authenticate("jwt", { session: false }), async (req, res)=>{
    const playlistId=req.params.playlistId

    const playlist=await Playlist.findOne({_id:playlistId});
    if(!playlist){
        return res.status(301).json({err:"Invalid ID"});
    }
    return res.status(200).json(playlist);
});
    

module.exports = router;
