const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const Playlist=require("../models/playlist");
const Song=require("../models/song");


router.post("/create",passport.authenticate("jwt", { session: false }), async (req, res)=>{
    const currentUser=req.user;
    const {name,thumbnail,songs}=req.body;
    if(!thumbnail|| !songs || !name){
        return res.status(301).json({err:"Insufficient Data"});
    }
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

router.get("/get/playlists/:playlistId",passport.authenticate("jwt", { session: false }), async (req, res)=>{
    const playlistId=req.params.playlistId

    const playlist=await Playlist.findOne({_id:playlistId});
    console.log(playlist);
    if(!playlist){
        return res.status(301).json({err:"Invalid ID"});
    }
    return res.status(200).json(playlist);
});

router.get("/get/me",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const artistId=req.params.artistId;

    
    const playlists=await Playlist.find({owner:artistId});
    return res.status(200).json({data:playlists})
});

router.get("/get/artist/:artistId",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const artistId=req.params.artistId;

    const artist=await User.findOne({_id:artistId});

    if(!artist){
        return res.status(304).json({err:"Invalid Artist Id"});
    }
    const playlists=await Playlist.find({owner:artistId}).populate("artist");
    return res.status(200).json({data:playlists})
});


router.post("/add/song",passport.authenticate("jwt",{session:false}), async(req,res)=>{
    const currentUser=req.user;
    const {playlistId,songId}=req.body;

    const playlist=await Playlist.findOne({_id:playlistId})

    if(!playlist){
        return res.status(304).json({err:"Playlist does not exist"});
    }
    if(!playlist.owner.equals(currentUser._id) && !playlist.collaborators.includes(currentUser._id)){
        return res.status(400).json({err:"Not allowed"});

    }
    const song=await Song.findOne({_id:songId}); 
    if(!song){
        return res.status(304).json({err:"Song does not exist"});
    }
    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);
});
    

module.exports = router;
