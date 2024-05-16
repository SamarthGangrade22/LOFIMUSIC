import {Icon} from '@iconify/react';
import logo from "./logo.png"
import {useState} from "react";
import TextInput from '../components/shared/TextInput'
import PasswordInput from '../components/shared/PasswordInput'
import { Link , useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";
import { makeUnauthentaticatedPOSTRequest } from "../utils/serverHelpers";
const LoginComponent=()=>{
    const [email,setEmail]=useState("");
    const [password ,setPassword]=useState("");
    const [cookie,setCookie]=useCookies(["token"]);
    const navigate=useNavigate();
    const login=async()=>{
        
        const data={email,password};
        console.log(data);
        const response=await makeUnauthentaticatedPOSTRequest("/auth/login",data);
        if(response && !response.err){
            console.log(response);
            const token=response.token;
            const date=new Date();
            date.setDate(date.getDate()+30);
            setCookie("token",token,{path:"/",expires:date})
            alert("Success");
            navigate("/home");
        }
        else{
            alert("Failure");
        }
    };  
    return <div className="w-full h-full flex flex-col items-center">
        <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
            <Icon icon="game-icons:music-spell" width="40px"/>
        </div>
        <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col ">
            <div className="font-bold mb-8 text-3xl ">
                To continue, log in to Lofi .
            </div>
            <div className="font-bold mb-8 text-lg">Dive into music</div>
            <TextInput 
                label="Email address or username"
                placeholder="Email address or Username"
                className="my-8 hb-400"
                value={email}
                setValue={setEmail} 
            />
            <PasswordInput
                label="Password"
                placeholder="Password"
                value={password}
                setValue={setPassword} 
            />
            <div className="w-full flex items-center justify-end my-8">
                <button className="bg-green-400 font-semibold p-3 px-10 rounded-full" onClick={(e)=>{
                    e.preventDefault();
                    login();
                }}>LOG IN</button>
            </div>
            <div className='w-full border border-solid border-gray-300'></div>
            <div className='my-6 font-semibold text-xl'>Don't have an account?</div>
            <div className="w-full border border-gray-400 flex items-center justify-center py-4 rounded-full text-gray-500 font-semibold text-lg">
                {/* <Link to="/signup" className='w-full'>SIGN UP FOR SPOTIFY</Link> */}
                <Link to="/signup" className='w-full flex items-center justify-center'>SIGN UP FOR LOFI</Link>
            </div>
        </div>
    </div>
 };

export default LoginComponent;