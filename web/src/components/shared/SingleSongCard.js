import { useContext } from "react";
import songContext from "../../contexts/songContext";

const SingleSongCard=({info, playSound})=>{
    const {currentSong,setCurrentSong}=useContext(songContext);
    return(
        <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-md" onClick={()=>{setCurrentSong(info);}}>
            <div className="w-12 h-12 bg-cover bg-center" style={{backgroundImage:`url("${info.thumbnail}")`}}>
                
            </div>
            <div className="flex w-full">
                <div className="text-red-900 flex justify-center  flex-col pl-4 w-5/6">
                    <div className="hover:underline cursor-pointer">{info.name}</div>
                    <div className="text-xs text-black hover:underline cursor-pointer">{info.artist.username}</div>
                </div>
                <div className="w-1/6 flex justify-center items-center text-app-black">
                    <div>3:44</div>
                    <div className="text-gray-400 flex items-center pl-3">...</div>
                </div>
            </div>
        </div>
    )
}
export default SingleSongCard;