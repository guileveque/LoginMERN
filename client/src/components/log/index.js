import React, { useState } from 'react';
import SignInForm from "./SignInForm";
import SignUpForm from './SignUpForm';
import "../../style/log.css";

const Log = () => {
    const [signUpModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState(false);

    const handleModals = (e) =>{
        if (e.target.id === "register") {
            setSignUpModal(true);
            setSignInModal(false);
        }else if (e.target.id === "login") {
            setSignUpModal(false);
            setSignInModal(true);
        }
    }

    return (
        <div>
            <div className="container_home">
            <div>
                    <h2>Projet scolaire, site factice</h2>
                    <p>Mot de passe crypté avec Bcrypt</p>
                    <p>Utilisation de JWT</p>
                    <p>Utilisation de redux pour la nav-bar</p>
                </div>
                <div>
                    <div onClick={handleModals} id="register">Register</div>
                    <div onClick={handleModals} id="login">Login</div>
                </div>
                {signInModal && <SignInForm />}
                {signUpModal && <SignUpForm />}
            </div>
        </div>
    );
}

export default Log;