import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from "../../pages/home";
import profil from "../../pages/profil";
import trending from "../../pages/trending";
import NavBar from "../NavBar";
import Update from "../../pages/blog";

const index = () => {
    return(
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={profil}/>
                <Route path="/update" exact component={Update}/>
                <Route to="/"/>
            </Switch>
        </Router>
    );
}

export default index;