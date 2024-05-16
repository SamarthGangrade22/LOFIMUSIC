
import './App.css';
import './output.css';
import { useState } from 'react';
import LoginComponent from "./routes/Login"; 
import SignupComponent from "./routes/Signup"; 
import HomeComponent from "./routes/Home"; 
import LoggedInHomeComponent from "./routes/LoggedInHome";
import { BrowserRouter,Routes,Route ,Navigate} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import UploadSong from "./routes/UploadSong"; 
import MyMusic from "./routes/MyMusic"; 
import SearchPage from "./routes/SearchPage";
import songContext from './contexts/songContext';
import Library from './routes/Library';
function App() {
  const [currentSong ,setCurrentSong]=useState(null);
  const [isPaused,setIsPaused]=useState(true);
    const [soundPlayed,setSoundPlayed]=useState(null);
  const [cookie, setCookie]=useCookies(["token"]);
  console.log(cookie)
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token?(
          //Logged in routes  
          <songContext.Provider value={{currentSong ,setCurrentSong ,soundPlayed,setSoundPlayed,isPaused,setIsPaused,}}>
            <Routes>
              {/*Defining route in routes which is a subclass of browserrouter  */}
              <Route path="/" element={<div>hello</div>}/>
              <Route path='/home' element={<LoggedInHomeComponent/>} />
              <Route path='/uploadSong' element={<UploadSong/>}/>
              <Route path='/searchPage' element={<SearchPage/>}/>
              <Route path='/myMusic' element={<MyMusic/>}/>
              <Route path='/library' element={<Library/>}/>
              <Route path='*' element={<Navigate to="/home"/>}/>    
            </Routes>
          </songContext.Provider>
        ):(
          //Default routes
          <Routes>
            <Route path='/login' element={<LoginComponent/>} />
            <Route path='/signup' element={<SignupComponent/>} />
            <Route path='/home' element={<HomeComponent/>} />
            <Route path='*' element={<Navigate to="/login"/>}/>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
