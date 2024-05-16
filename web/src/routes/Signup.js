import {useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom"
import {Icon} from '@iconify/react';
import TextInput from '../components/shared/TextInput'
import PasswordInput from '../components/shared/PasswordInput'
import { Link } from 'react-router-dom';
import { makeUnauthentaticatedPOSTRequest } from "../utils/serverHelpers";

const SignupComponent=()=>{
    const [email,setEmail]=useState("");
    const [confirmEmail, setConfirmEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password ,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [cookie,setCookie]=useCookies(["token"]);
    const navigate=useNavigate();
    const signUp=async()=>{
        if(email !== confirmEmail){
            alert(
                "Email and confirm email fields must match . Please check again"
            );
            return;
        }
        const data={email,password,username,firstName,lastName};
        console.log(data);
        const response=await makeUnauthentaticatedPOSTRequest("/auth/register",data);
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


    return <div className="w-full h-full flex flex-col items-center "
        
        >
        <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
            <Icon icon="game-icons:music-spell" width="50px"/>
        </div>
        <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col  ">
            <div className="font-bold text-xl  mb-8 ">
                Sign up for free to start listening.
            </div>
            <TextInput 
                label="Email address"
                placeholder="Email your address"
                className="my-8 hb-400" 
                value={email}
                setValue={setEmail}
            />
            <TextInput 
                label="Confirm Email address"
                placeholder="Enter your email again"
                className="mb-6 hb-400" 
                value={confirmEmail}
                setValue={setConfirmEmail}
            />
            <TextInput 
                label="Username"
                placeholder="Enter your username"
                className="mb-6 hb-400" 
                value={username}
                setValue={setUsername}
            />
            <PasswordInput
                label="Create Password"
                placeholder="Enter a strong password here"
                value={password}
                setValue={setPassword} 
            />
            <div className='w-full flex justify-between items-center space-x-4 '>
                <TextInput 
                    label="First Name"
                    placeholder="Enter Your First Name"
                    className="my-6 "
                    value={firstName}
                    setValue={setFirstName} 
                />
                <TextInput 
                    label="Last Name"
                    placeholder="Enter Your Last Name"
                    className="my-6 "
                    value={lastName}
                    setValue={setLastName} 
                />
            </div>
            <div className="w-full flex items-center justify-center my-8">
                <button className="bg-green-400 font-semibold p-3 px-10 rounded-full" 
                onClick={(e)=>{
                    e.preventDefault();
                    signUp();
                }}>
                    Sign Up
                </button>
            </div>
            <div className='w-full border border-solid border-gray-300'></div>
            <div className='my-6 font-semibold text-xl'>Already have an account?</div>
            <div className="w-full border border-gray-400 flex items-center justify-center py-4 rounded-full text-gray-500 font-semibold text-lg">
                {/* <Link to="/login" className='w-full'>LOG IN INSTEAD</Link> */}
                <Link to="/login" className='w-full flex items-center justify-center'>LOG IN INSTEAD</Link>
            </div>
        </div>
    </div>
 };

export default SignupComponent;