import spotify_logo from "../assets/images/Logo.png.png";
import IconText from "../components/shared/IconTexts"
import TextInput from "../components/shared/TextInput";
import TextWithHover from "../components/shared/TextWithHover";
// import IconText from "../components/shared/TextWithHover"
import {Icon} from "@iconify/react";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { useState } from "react";
import { makeAuthentaticatedPOSTRequest } from "../utils/serverHelpers";
import {useNavigate} from "react-router-dom";
const UploadSong=()=>{
   const [name,setName]=useState("");
   const [thumbnail,setThumbnail]=useState("");
   const [playlistUrl,setPlaylistUrl]=useState("");
   const [uploadedSongFileName,setUploadedSongFileName ]=useState("");
   const navigate= useNavigate();
   
   const submitSong =async()=>{
    const data={name,thumbnail,track:playlistUrl};
    const response=await  makeAuthentaticatedPOSTRequest("/song/create",data);
    console.log(response);
    if(response.err){
        alert("Could not create song");
        return;
    }
    alert("Success");
    navigate("/home");
   };
//    console.log(response);
    return(
        <div className="h-full w-full flex">
            <div className="h-full w-1/5 bg-black flex flex-col justify-between">
                <div>
                    <div className="p-5 ">
                    <img src={spotify_logo} alt="spotify_logo" width={130} className="ml-10"/>
                        <div className="text-green-100 font-semibold text-lg ml-10 mt-5 italic ">Unleash Music</div>
                        
                    </div>
                    <div className="my-4">
                        <IconText 
                            iconName={"material-symbols:home"}
                            displayText={"Home"}
                            active
                        />
                        <IconText 
                            iconName={"material-symbols:search-rounded"}
                            displayText={"Search"}
                        />
                        <IconText 
                            iconName={"icomoon-free:books"}
                            displayText={"Library"}
                        />
                        <IconText 
                            iconName={"material-symbols:library-music-sharp"}
                            displayText={"My Music"}
                        />
                    </div>
                    <div className="pt-4">
                        <IconText 
                            iconName={"material-symbols:add-box"}
                            displayText={"Create Playlist"}
                            active
                        />
                        <IconText 
                            iconName={"mdi:cards-heart"}
                            displayText={"Liked Songs"}
                        />
                    
                    </div>
                </div>
                <div className="px-5 pb-10">
                    <div className="border rounded-full border-white-400 text-white w-2/5 flex px-2 py-1 items-center justify-center hover:border-white border-solid cursor-pointer ">
                        <Icon icon="carbon:earth-europe-africa"/> 
                        <div className="ml-2">English</div>
                    </div>
                </div>
            </div>

            <div className="h-full w-4/5 bg-app-black overflow-auto ">
            <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                    <div className="w-1/2 flex h-full">
                        <div className="w-2/3 flex justify-around items-center">
                            <TextWithHover displayText={"Premium"} />
                            <TextWithHover displayText={"Support"} />
                            <TextWithHover displayText={"Download"} />
                            <div className="h-1/2 border-r border-white"></div>
                        </div>
                        <div className="w-1/3 flex justify-around h-full items-center">
                            <TextWithHover displayText={"Upload Song"} />
                            <div className="bg-white h-10  w-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                SG
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content p-8 pt-0 overflow-auto">
                    <div className="text-2xl font-semibold mb-5 text-white mt-8">
                        Upload Your Music
                    </div>
                    <div className="w-2/3 flex justify-between space-x-3 ">
                        <div className="w-1/2">
                            <TextInput label="Name" labelClassName="text-white" placeholder="Name" value={name} setValue={setName} />
                        </div>
                        <div className="w-1/2">
                            <TextInput label="Thumbnail"labelClassName="text-white" placeholder="Thumbnail" value={thumbnail} setValue={setThumbnail}/>
                        </div>
                        
                        
                    </div>                    
                    <div className="py-5">
                        {
                            uploadedSongFileName?(
                            <div className="bg-white rounded-full p-3 w-1/3">
                                {uploadedSongFileName.substring(0,35)}...
                            </div>
                            ):(
                            <CloudinaryUpload setUrl={setPlaylistUrl } setName={setUploadedSongFileName}/>
                        )}
                    </div>
                    <div className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold"
                        onClick={submitSong}
                    >
                        Submit Song
                    </div>
                </div>
            </div>
        

        </div>
    );
};



export default UploadSong;