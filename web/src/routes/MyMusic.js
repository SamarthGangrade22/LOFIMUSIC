import spotify_logo from "../assets/images/spotify_logo_white.svg";
import {Howl, Howler} from 'howler';

import IconText from "../components/shared/IconTexts"
import SingleSongCard from "../components/shared/SingleSongCard";
import TextInput from "../components/shared/TextInput";
import TextWithHover from "../components/shared/TextWithHover";
// import IconText from "../components/shared/TextWithHover"
import {Icon} from "@iconify/react";
import { makeAuthentaticatedGETRequest } from "../utils/serverHelpers";
import {useState, useEffect} from "react";
import LoggedInContainer from "../containers/LoggedInContainers";
// const songData = [
//     {
//         thumbnail:"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbmd8ZW58MHx8MHx8fDA%3D",
//         name:"Curtains",
//         artist:"Ed Sheeran",
//     },
// ];

// const MyMusic=()=>{
//     const [songData, setSongData] = useState([]);
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


//     useEffect(() => {
//         const getData = async () => {
//             const response = await makeAuthentaticatedGETRequest(
//                 "/song/get/mysongs"
//             );
            
//             setSongData(response.data);
//         };
//         getData();
//     }, []);

//     return(
//         <div className="h-full w-full flex">
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
//                 <div className="content p-8  overflow-auto">
//                     <div className="text-white text-xl font-semibold pb-4 pl-2">My Songs</div>
//                     <div className="space-y-3 overflow-auto">
//                        {/* <SingleSongCard  info={songData}/> */}
//                         {songData.map((item)=>{
                            
//                             return <SingleSongCard info={item} playSound={playSound}/>;
//                         })}
//                     </div>
//                 </div>
//             </div>
        

//         </div>
//     );
// };
const MyMusic=()=>{
    const [songData, setSongData] = useState([]);
    // const [soundPlayed,setSoundPlayed]=useState(null)
    // const playSound=(songSrc)=>{
    //     if(soundPlayed){
    //         soundPlayed.stop();
    //     }
    //     let sound = new Howl({
    //         src: [songSrc],
    //         html5: true
    //     });
    //     setSoundPlayed(sound);
    //     sound.play();
    // };
    useEffect(() => {
                const getData = async () => {
            const response = await makeAuthentaticatedGETRequest(
                "/song/get/mysongs"
            );
                    
            setSongData(response.data);
        };
        getData();
    }, []);
    return(
        <LoggedInContainer curActiveScreen="MyMusic">
            <div className="text-red-900 text-xl font-semibold pb-4 pl-2">My Songs</div>
                     <div className="space-y-3 overflow-auto">
                        {/* <SingleSongCard  info={songData}/> */}
                         {songData.map((item)=>{
                            
                             return <SingleSongCard info={item} playSound={()=>{}}/>;
                         })}
                     </div>
                 
        </LoggedInContainer>
    )
};


export default MyMusic;