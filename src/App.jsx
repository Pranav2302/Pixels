import { useState,useEffect } from 'react'
import {useDispatch} from "react-redux"
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './authslice'
import  Header from "./components/container/Header/Header";
import Footer from "./components/container/Footer/Footer";
import { Outlet } from 'react-router-dom'

function App() {
  const [loading,setloading] = useState(true) //this is to give loading icon and to load to app as network request may required time to reponse
  const dispatch = useDispatch() //this is to connect react and redux and to dispatch the data
  
  useEffect(()=>{   //this check which user is login ,when the app is loaded 
    authService.getcurrentUser()
    .then((userData)=>{
      if(userData){
      dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setloading(false))  //this will run compulsory , as .then or .catch runs but finally will fix run   
  },[])
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-customTeagreen">
      <div className="w-full block">
        <Header />
        <main>
          TODO:
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App
