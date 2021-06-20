import React, { useContext } from "react";
import Log from '../components/log';
import { UidContext } from "../components/AppContext";
import "../style/log.css";

const Profil = () => {

    const uid = useContext(UidContext);
    return(
            <div className="profil-page">
                {uid ? (
                    <h1> Vous etes connecté</h1>
                ) : (
                    <div className="log-container">
                        <Log />
                    </div>
                )}
            </div>
    );
}

export default Profil;