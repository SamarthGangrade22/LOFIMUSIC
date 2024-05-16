import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconTexts"
import TextWithHover from "../components/shared/TextWithHover";
// import IconText from "../components/shared/TextWithHover"
import {Icon} from "@iconify/react";
import { useState } from "react";
import {Howl,Howler} from "howler";
import LoggedInContainer from "../containers/LoggedInContainers";


const focusCardsData = [
    {
        title: "Peaceful Piano",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];

const spotifyPlaylistsCardData = [
    {
        title: "This is one",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];

const Home=()=>{
    return (
        <LoggedInContainer curActiveScreen="home">
            <PlaylistView
                titleText="Focus"
                cardsData={focusCardsData}
            />
            <PlaylistView
                titleText="Spotify Playlists"
                cardsData={spotifyPlaylistsCardData}
            />
            <PlaylistView
                titleText="Sound of India"
                cardsData={focusCardsData}
            />
        </LoggedInContainer>
    );
};


// const Home=()=>{
//     const [isPaused,setIsPaused]=useState(true);
//     const [soundPlayed,setSoundPlayed]=useState(null)
//     const playSound=(songSrc)=>{
//         if(soundPlayed){
//             soundPlayed.stop();
//         }
//         let sound = new Howl({
//             src: [songSrc],
//             html5: true
//         });
//         setSoundPlayed(sound);
//         sound.play();
//     };

//     const pauseSound=()=>{
//         soundPlayed.pause();
//     }
//     const togglePlayPause=()=>{
//         if(isPaused){
//             playSound("https://res.cloudinary.com/dw0trggex/video/upload/v1715547336/kubab8pegoucmgjtdidu.mp3");
//             setIsPaused(false);
//         }
//         else{
//             pauseSound();
//             setIsPaused(true);
//         }
//     }
//     return(
//         <div className="h-full w-full bg-app-black">
//             <div className="h-9/10 w-full flex">
//             <div className="h-full w-1/5 bg-black flex flex-col justify-between">
//                 <div>
//                     <div className="p-5 ">
//                         <img src={spotify_logo} alt="spotify_logo" width={130}/>
                        
//                     </div>
//                     <div className="my-4">
//                         <IconText 
//                             iconName={"material-symbols:home"}
//                             displayText={"Home"}
//                             active
//                         />
//                         <IconText 
//                             iconName={"material-symbols:search-rounded"}
//                             displayText={"Search"}
//                         />
//                         <IconText 
//                             iconName={"icomoon-free:books"}
//                             displayText={"Library"}
//                         />
//                         <IconText 
//                             iconName={"material-symbols:library-music-sharp"}
//                             displayText={"My Music"}
//                         />
//                     </div>
//                     <div className="pt-4">
//                         <IconText 
//                             iconName={"material-symbols:add-box"}
//                             displayText={"Create Playlist"}
//                             active
//                         />
//                         <IconText 
//                             iconName={"mdi:cards-heart"}
//                             displayText={"Liked Songs"}
//                         />
                    
//                     </div>
//                 </div>
//                 <div className="px-5 pb-10">
//                     <div className="border rounded-full border-white-400 text-white w-2/5 flex px-2 py-1 items-center justify-center hover:border-white border-solid cursor-pointer ">
//                         <Icon icon="carbon:earth-europe-africa"/> 
//                         <div className="ml-2">English</div>
//                     </div>
//                 </div>
//             </div>

//             <div className="h-full w-4/5 bg-app-black overflow-auto ">
//             <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
//                     <div className="w-1/2 flex h-full">
//                         <div className="w-2/3 flex justify-around items-center">
//                             <TextWithHover displayText={"Premium"} />
//                             <TextWithHover displayText={"Support"} />
//                             <TextWithHover displayText={"Download"} />
//                             <div className="h-1/2 border-r border-white"></div>
//                         </div>
//                         <div className="w-1/3 flex justify-around h-full items-center">
//                             <TextWithHover displayText={"Upload Song"} />
//                             <div className="bg-white h-10  w-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
//                                 SG
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="content p-8 pt-0 overflow-auto">
                    
//                     <PlaylistView
//                         titleText="Focus"
//                         cardsData={focusCardsData}
//                     />
//                     <PlaylistView
//                         titleText="Spotify Playlists"
//                         cardsData={spotifyPlaylistsCardData}
//                     />
//                     <PlaylistView
//                         titleText="Sound of India"
//                         cardsData={focusCardsData}
//                     />
//                 </div>
//             </div>
//             </div>
//             <div className="w-full h-1/10 bg-black bg-opacity-30 flex text-white items-center pl-4">
//                 <div className="w-1/4 flex items-center">
//                     <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbmd8ZW58MHx8MHx8fDA%3D" 
//                     alt="currentSongThumbnail" 
//                     className="h-12 w-12 rounded"/>
//                     <div className="pl-2">
//                         <div className="text-sm hover:underline cursor-pointer">Curtains</div>
//                         <div className="text-xs text-gray-500 hover:underline cursor-pointer">Ed Sheeran</div>
//                     </div>
                    
//                 </div>
//                 <div className="w-1/2 flex justify-center  h-full flex-col items-center">
//                     <div className="flex w-1/3 justify-between items-center ">
//                         <Icon 
//                             icon="ph:shuffle-fill " 
//                             fontSize={27} className="cursor-pointer text-gray-500 hover:text-white" />
//                         <Icon 
//                             icon="mdi:skip-previous-outline"
//                             fontSize={27} className="cursor-pointer text-gray-500 hover:text-white"/>
//                         <Icon 
//                             icon={isPaused?"ic:baseline-play-circle":"ic:baseline-pause-circle"}
//                             fontSize={50} className="cursor-pointer text-gray-500 hover:text-white"
//                             onClick={togglePlayPause}
//                             />
//                         <Icon 
//                             icon="mdi:skip-next-outline"
//                             fontSize={27} className="cursor-pointer text-gray-500 hover:text-white"/>
//                         <Icon 
//                             icon="ic:twotone-repeat"
//                             fontSize={27} className="cursor-pointer text-gray-500 hover:text-white"/>
                        
//                     </div>
//                     <div></div>
//                 </div>
//                 <div className="w-1/4 flex justify-end">

//                 </div>
//             </div>
//         </div>
//     );
// };

const PlaylistView = ({titleText,cardsData}) =>{
    return <div className="text-red-900 mt-8">
        <div className="text-2xl font-semibold mb-5 ">
            {titleText}
        </div>
        <div className="w-full flex justify-between space-x-4">
        {
                    // cardsData will be an array
                    cardsData.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        );
                    })
                }
        </div>
    </div>
}

const Card = ({title,description,imgUrl}) =>{
    return(
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
            <div className="pb-4 pt-2 hx-6">
                <img className="w-full rounded-md" 
                    src={imgUrl}
                    alt="Piano"
                />
            </div>
            <div className="text-black font-semibold py-3">{title}</div>

            <div className="text-black text-sm">{description}</div>
        </div>

    );
};

export default Home;