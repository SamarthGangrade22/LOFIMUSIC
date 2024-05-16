import LoggedInContainer from "../containers/LoggedInContainers";
import { Icon } from "@iconify/react/dist/iconify.js";
import {useState} from "react";
import { makeAuthentaticatedGETRequest } from "../utils/serverHelpers";
import SingleSongCard from "../components/shared/SingleSongCard";
const SearchPage=()=>{

    const [isInputFocused,setIsInputFocused]=useState(false)
    const [searchText , setSearchText]=useState("");
    const [songData,setSongData]=useState([]);
    const searchSong= async()=>{
        const response=await makeAuthentaticatedGETRequest("/song/get/songname/"+searchText);
        setSongData(response.data);
        // setSearchText("");
    }
    console.log(searchText);
    return(
        <LoggedInContainer curActiveScreen="search">
                <div className="w-full py-6">
                    <div className="w-1/3 p-3 text-sm rounded-full bg-gray-800 px-5 flex text-white">
                    <Icon icon="ic:outline-search" className="text-lg "  />
                    <input
                        type="text"
                        placeholder="What do you want to listen to?"
                        className="w-full bg-gray-800 focus:outline-none pl-5"
                        onFocus={() => {
                            setIsInputFocused(true);
                        }}
                        onBlur={() => {
                            setIsInputFocused(false);
                        }}
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchSong();
                            }
                        }}
                    />
                    </div>
                    
                    {
                        songData.length>0?
                        
                        <div className="pt-10 space-y-2">
                            <div className="text-white">
                                Showing search results for <span className="font-bold">{searchText}</span> : 
                            </div>
                            {
                                songData.map(item=>{
                                    return <SingleSongCard 
                                        info={item} 
                                        key={JSON.stringify(item)}
                                        playSound={()=>{}}/>
                                })
                            }
                        </div>:
                        <div className="text-white p-10">
                            Nothing to show here .
                        </div>
                }
                </div>
        </LoggedInContainer>
    )
};

export default SearchPage;