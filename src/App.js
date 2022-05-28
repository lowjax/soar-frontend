import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom"
import { Link } from "react-router-dom"
import React from "react"
import { useState } from "react";
import { useCookies } from "react-cookie";




// admin imports
// import { MyUserForm } from "./components/MyUserForm"
// import { Button } from "react-bootstrap"
import NavbarAdmin  from "./components/NavbarAdmin"
import ContentcontainerAdmin from "./components/ContentcontainerAdmin"
import CreateAccountAdmin from "./components/CreateAccountAdmin"
import FavoritesAdmin from "./components/FavoritesAdmin"
import IndexAdmin from "./components/IndexAdmin"
import LogoutAdmin from "./components/LogoutAdmin"
import SelectionAdmin from "./components/selectionAdmin"

// theme component
import ThemeUser from "./components/ThemeUser"
import ThemeAdmin from "./components/ThemeAdmin"



// user imports 
import ContactUser from "./components/ContactUser"
import NavbarUser from "./components/NavbarUser"
import CreateAccountUser from "./components/CreateAccountUser"
import FavoritesUser from "./components/FavoritesUser"
import ContentListUser from "./components/ContentListUser"
import IndexUser from "./components/IndexUser"
import SelectionUser from "./components/SelectionUser"
import LogoutUser from "./components/LogoutUser"


// import images
import BackArrow from "./../public/BackArrow.svg"
import Climbing from "./../public/Climbing.svg"
// import PhysioContent from "./../public/PhysioContent.svg"
import Skateboard from "./../public/Skateboard.svg"
import SoarLogo from "./../public/SoarLogo.svg"
import Surf from "./../public/Surf.svg"
import BodyDiagram from "./../public/BodyDiagram.svg"



// css imports
import "../src/css/style.scss"
import "../src/css/Contact-Form-Clean.css"
import "../src/css/Login-Form-Clean.css"
import "../src/css/Navigation-Clean.css"
import "../src/css/Pretty-Registration-Form.css"
import "../src/css/styles.css"
import "../src/css/bootstrap.min.css"


//js imports
import"../src/bootstrap.min.js"



import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./components/Login"
// const buttonClass = "my-3 px-3"


export const App = () => {
    // React.useEffect(() => {
    //     const json = localStorage.getItem('site-light-mode');
    //     const currentMode = JSON.parse(json);


        // const [user, setUser] = React.useState(null);
        const [token, setToken] = React.useState(null);
        const [error, setError] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);
        const [lightMode, setLightMode] = React.useState(false);
       

  // useEffect here runs everytime a component loads or theme is changed
  // and checks which theme to style with based on whats set in localStorage

    React.useEffect(() => {
        const json = localStorage.getItem('site-light-mode');
        const currentMode = JSON.parse(json);
            if (currentMode) {
            setLightMode(true);
            } else {
            setLightMode(false);
            }
        }, []);
     React.useEffect(() => {
            if (lightMode) {
            document.body.classList.add('light');
            } else {
            document.body.classList.remove('light');
            }
    const json = JSON.stringify(lightMode);
    localStorage.setItem('site-light-mode', json);
  }, [lightMode]);


    // // to put something into local storage
    //     localStorage.setItem("user")
    // // to grab something out of local storage
    //      const user = localStorage.getItem("user")


  

    return (<> 
    <div>
    <Routes>
    <Route path="*" element={<Login />} />
          <Route path="/IndexUser" element={<IndexUser />} />
          <Route path="/SelectionUser" element={<SelectionUser />} />
          <Route path="/ContentListUser" element={<ContentListUser />} />
          <Route path="/ContactUser" element={<ContactUser />} />
          <Route path="/FavoritesUser" element={<FavoritesUser />} />
          <Route path="/ThemeUser" element={<ThemeUser />} />
          <Route path="/LogoutUser" element={<LogoutUser />} />
          <Route path="/CreateAccountUser" element={<CreateAccountUser />} />
          
        
          <Route path="/IndexAdmin" element={<IndexAdmin />} />
          <Route path="/SelectionAdmin" element={<SelectionAdmin />} />
          <Route path="/ContentcontainerAdmin" element={<ContentcontainerAdmin />} />
          <Route path="/FavoritesAdmin" element={<FavoritesAdmin />} />
          <Route path="/LogoutAdmin" element={<LogoutAdmin />} />
          <Route path="/ThemeAdmin" element={<ThemeAdmin />} />
          <Route path="/CreateAccountAdmin" element={<CreateAccountAdmin />} />


    </Routes>
    </div>

    <div>
    {/* <Login /> */}
    

    {/* <NavbarAdmin />
    <CreateAccountUser />
    <Login /> */}
    {/* <NavbarUser /> */}
    {/* <IndexUser /> */}
    {/* <SelectionUser /> */}
    {/* <ContentListUser /> */}
    {/* <FavoritesUser /> */}
    {/* <ContactUser /> */}
    {/* <LogoutUser /> */}
    {/* <ThemeUser /> */}


    {/* <CreateAccountAdmin /> */}
    {/* <IndexAdmin /> */}
    {/* <SelectionAdmin /> */}
    {/* <ContentcontainerAdmin /> */}
    {/* <FavoritesAdmin /> */}
    {/* <LogoutAdmin /> */}
    {/* <ThemeAdmin /> */}



    
    
    
 
    </div>
    </>
    )};