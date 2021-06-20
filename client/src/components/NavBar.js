import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import Logout from './log/Logout';
import "../style/nav-bar.css";

const NavBar = () => {
    const userData = useSelector((state) => state.userReducer);
    console.log(userData);
    return (
        <div>
            <nav>
                <div className="container">
                    <div className="info">Developpement login</div>
                    <div className="profil_link"><NavLink to="/">Profil</NavLink></div>
                    <div className="update_link"><NavLink to="/update">Modifier le profil</NavLink></div>
                    <div><h1>Hello {userData.pseudo}</h1>
                        <p>Email : {userData.email}</p><br></br></div>
                    <Logout />
                </div>
            </nav>
            
        </div>
    );
};

export default NavBar;