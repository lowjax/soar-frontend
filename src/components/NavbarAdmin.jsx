import React from "react";
import { Nav } from "react-bootstrap";

import LogoutAdmin from "./LogoutAdmin";
import SelectionAdmin from "./selectionAdmin";
import { Link } from "react-router-dom";
import BackAarow from "../../public/BackArrow.svg";
import IndexAdmin from "./IndexAdmin";
import ContentcontainerAdmin from "../components/ContentcontainerAdmin";
import FavoritesAdmin from "./FavoritesAdmin";
import SoarLogo from "../../public/SoarLogo.svg";
import ThemeAdmin from "./ThemeAdmin"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function NavbarAdmin() {
  return (
    <div>
    
        <nav className="navbar navbar-light navbar-expand-md" id="soarNavBar">
          <div className="container-fluid">
            <a href="indexAD.html">
              <img id="backArrow" src={BackAarow} height={40} />
            </a>
            <a href="indexAD.html">
              <img id="soarLogo" src={SoarLogo} height={40} />
            </a>
            <button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav">
               
              <Link
                  className="nav-link text-center"
                  as={Link}
                  to="/IndexAdmin"
                  element={IndexAdmin}
                >
                  Index Admin
                </Link>
               
                <Link
                  className="nav-link text-center"
                  as={Link}
                  to="/ContentcontainerAdmin"
                  element={ContentcontainerAdmin}
                >
                  Content
                </Link>

                <Link
                  className="nav-link text-center"
                  as={Link}
                  to="/SelectionAdmin"
                  element={SelectionAdmin}
                >
                  Filter Screen
                </Link>

                <Link
                  className="nav-link text-center"
                  as={Link}
                  to="/FavoritesAdmin"
                  element={FavoritesAdmin}
                >
                  Favorites
                </Link>


                <Link
                  className="nav-link text-center"
                  as={Link}
                  to="/ThemeAdmin"
                  element={ThemeAdmin}
                >
                  Theme Settings
                </Link>


                <Link
                  className="nav-link text-center"
                  as={Link}
                  to="/LogoutAdmin"
                  element={LogoutAdmin}
                >
                  Logout
                </Link>

              </ul>
            </div>
          </div>
        </nav>
       
    </div>
  );
}
