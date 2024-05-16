import spotify_logo from "../assets/images/Logo.png.png";
import IconText from "../components/shared/IconTexts"
import TextWithHover from "../components/shared/TextWithHover";
import { useContext ,useLayoutEffect ,useRef} from 'react';

// import IconText from "../components/shared/TextWithHover"
import {Icon} from "@iconify/react";
import { Children, useState } from "react";
import {Howl,Howler} from "howler";
import songContext from "../contexts/songContext";

import CreatePlaylistModal from "../modals/CreatePlaylist"


const LoggedInContainer=({children ,curActiveScreen})=>{
    const [createPlaylistModalOpen,setCreatePlaylistModalOpen]=useState(false);
    const {currentSong,setCurrentSong,soundPlayed,setSoundPlayed,isPaused,setIsPaused}=useContext(songContext);
    const firstUpdate =useRef(true);
    useLayoutEffect(()=>{
        if(firstUpdate.current){
            firstUpdate.current=false;
            return;
        }
        if(!currentSong){
            return;
        }
        changeSong(currentSong.track);
    },[currentSong && currentSong.track]);
    const playSound=()=>{
        if(!soundPlayed){
            return;
        }
        soundPlayed.play();
    }

    console.log(currentSong);
    const changeSong=(songSrc)=>{
        if(soundPlayed){
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true
        });
        setSoundPlayed(sound);
        sound.play();
        setIsPaused(false);
    };

    const pauseSound=()=>{
        soundPlayed.pause();
    }
    const togglePlayPause=()=>{
        if(isPaused){
            playSound(currentSong.track);
            setIsPaused(false);
        }
        else{
            pauseSound();
            setIsPaused(true);
        }
    }
    return(
        <div className="h-full w-full bg-black">
            {createPlaylistModalOpen && <CreatePlaylistModal closeModal={()=>{setCreatePlaylistModalOpen(false)}}/>}
            <div className={`${currentSong?"h-9/10":"h-full"} w-full flex`}>
            <div className="h-full w-1/5 bg-blue-800 bg-opacity-20 flex flex-col justify-between">
                <div>
                    <div className="p-5 ">
                        <img src={spotify_logo} alt="spotify_logo" width={130} className="ml-10"/>
                        <div className="text-green-100 font-semibold text-lg ml-10 mt-5 italic ">Unleash Music</div>
                        
                    </div>
                    <div className="my-4">
                        <IconText 
                            iconName={"material-symbols:home"}
                            displayText={"Home"}
                            
                            targetLink={"/home"}
                            active={curActiveScreen==="home"}
                            
                        />
                        <IconText 
                            iconName={"material-symbols:search-rounded"}
                            displayText={"Search"}
                            targetLink={"/searchPage"}
                            active={curActiveScreen==="search"}
                        />
                        <IconText 
                            iconName={"icomoon-free:books"}
                            displayText={"Library"}
                            active={curActiveScreen==="Library"}
                            targetLink={"/library"}
                        />
                        <IconText 
                            iconName={"material-symbols:library-music-sharp"}
                            displayText={"My Music"}
                            targetLink={"/myMusic"}
                            active={curActiveScreen==="MyMusic"}
                        />
                    </div>
                    <div className="pt-4">
                        <IconText 
                            iconName={"material-symbols:add-box"}
                            displayText={"Create Playlist"}
                            active
                            onClick={()=>{
                                setCreatePlaylistModalOpen(true);
                            }}
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

            <div className="h-full w-4/5 bg-black overflow-auto ">
            <div className="navbar w-full h-1/10 bg-blue-400 bg-opacity-20 flex items-center justify-end">
                    <div className="w-1/2 flex h-full">
                        <div className="w-2/3 flex justify-around items-center">
                            <TextWithHover displayText={"Premium"} />
                            <TextWithHover displayText={"Support"} />
                            <TextWithHover displayText={"Download"} />
                            <div className="h-1/2 border-r border-white"></div>
                        </div>
                        <div className="w-1/3 flex justify-around h-full items-center">
                            <TextWithHover displayText={"Upload Song"} targetLink={"/uploadSong"} />
                            <div className="bg-white h-10  w-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                                SG
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content p-8 pt-0 overflow-auto  bg-blue-300">
                    
                    {children}
                </div>
            </div>
            </div>
            {
                currentSong &&
            
            <div className="w-full h-1/10 bg-blue-700 bg-opacity-30 flex text-white items-center pl-4">
                <div className="w-1/4 flex items-center">
                    <img src={currentSong.thumbnail} 
                    alt="currentSongThumbnail" 
                    className="h-12 w-12 rounded"/>
                    <div className="pl-2">
                        <div className="text-sm hover:underline cursor-pointer">{currentSong.name}</div>
                        <div className="text-xs text-gray-500 hover:underline cursor-pointer">{currentSong.artist.firstname+' '+currentSong.artist.lastname}</div>
                    </div>
                    
                </div>
                <div className="w-1/2 flex justify-center  h-full flex-col items-center">
                    <div className="flex w-1/3 justify-between items-center ">
                        <Icon 
                            icon="ph:shuffle-fill " 
                            fontSize={27} className="cursor-pointer text-gray-500 hover:text-white" />
                        <Icon 
                            icon="mdi:skip-previous-outline"
                            fontSize={27} className="cursor-pointer text-gray-500 hover:text-white"/>
                        <Icon 
                            icon={isPaused?"ic:baseline-play-circle":"ic:baseline-pause-circle"}
                            fontSize={50} className="cursor-pointer text-gray-500 hover:text-white"
                            onClick={togglePlayPause}
                            />
                        <Icon 
                            icon="mdi:skip-next-outline"
                            fontSize={27} className="cursor-pointer text-gray-500 hover:text-white"/>
                        <Icon 
                            icon="ic:twotone-repeat"
                            fontSize={27} className="cursor-pointer text-gray-500 hover:text-white"/>
                        
                    </div>
                    <div></div>
                </div>
                <div className="w-1/4 flex justify-end">

                </div>
            </div>
            }
        </div>
    );
};

export default LoggedInContainer;