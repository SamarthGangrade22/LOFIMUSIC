const mongoose = require("mongoose");

const User = new mongoose.Schema({
   firstname:{
      type: String, 
      required: false
   },
   lastname:{
      type: String, required: false
   },
   username:{
      type: String, 
      required: true
   },
   email:{
      type: String, 
      required: true, unique: true
   },
   password: {
      type: String,
      required: true ,
      private: true
   },
   likedSongs:{
      type: String, 
      default:""
   },
   likedPlaylist:{
      type: String, 
      default:""
   },
   subscribedArtist:{
      type: String, 
      default:""
   }
  });
  
  const UserModel = mongoose.model("User", User);
  module.exports = UserModel;