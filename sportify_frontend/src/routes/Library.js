import LoggedInContainer from "../containers/LoggedInContainers";
import {useState,useEffect} from "react";
import { makeAuthentaticatedGETRequest } from "../utils/serverHelpers";
const Library=()=>{
    const [myPlaylists, setMyPlaylists] = useState([]);
    useEffect(()=>{
        const getData=async()=>{
            const response=await makeAuthentaticatedGETRequest("/playlist/get/me");
            setMyPlaylists(response.data);
        };
        getData();
    },[]);
    return (
        <LoggedInContainer curActiveScreen="Library">
            <div className="text-white text-xl pt-8">My Playlist </div>
            <div className="py-5 grid gap-5 grid-cols-5">
                {myPlaylists.map((item) => {
                        return (
                            <Card
                                key={JSON.stringify(item)}
                                title={item.name}
                                description=""
                                imgUrl={item.thumbnail}
                                playlistId={item._id}
                            />
                        );
                    })}
            </div>
        </LoggedInContainer>
    );
};


const Card = ({title,description,imgUrl}) =>{
    return(
        <div className="bg-black bg-opacity-40 w-full p-4 rounded-lg">
            <div className="pb-4 pt-2 hx-6">
                <img className="w-full rounded-md" 
                    src={imgUrl}
                    alt="Piano"
                />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>

            <div className="text-gray-500 text-sm">{description}</div>
        </div>

    );
};


export default Library;