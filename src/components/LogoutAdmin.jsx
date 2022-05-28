import React from "react";
import NavbarAdmin from "./NavbarAdmin";
import { useState } from "react";

export default function LogoutAdmin() {

  function logout() {

    console.log("Something")
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      // body: urlencoded,
      // redirect: "follow",
      credentials: 'include'
    };
    console.log('Before Fetch')

    fetch("http://localhost:1235/api/users/logout", requestOptions)
    .then((response) => {
      console.log(response)
      if (response.status == 200) {
        console.log(response);

        alert("Success! You are now logged out.");
       
        // window.location.href= "Login"
        
        // return;
      }
    })
    .catch((e) => {
      console.log(bodyContent);
      console.log(e);
      alert("Sorry, something isn't right");
      //return;
    });
}; 

function handleSubmit(e) {
  e.preventDefault();
  console.log('You clicked submit.');

  fetch("http://localhost:1235/api/users/logout", {
    method:"POST"
  }).then(response => response.json()).then(json => console.log(json))
}
    

  return (
    <div>
      <NavbarAdmin />
      <div id="logoutDiv">
        <h1 id="logoutHeader">FIX ME</h1>
        <p id="logoutParagraph">
          By clicking below you are exiting SAOR, all unsaved progressed will
          deleted. Are you sure you want to logout?
        </p>
        <a id="logOut" href="../login.html">
        <button type="button"  onClick={logout}>Logout</button>
        </a>
      </div>
    </div>
  );
}
