import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "../style/log.css";


const UpdateProfil = () => {
    const userData = useSelector((state) => state.userReducer);

    const idlog = userData._id;
    const [pseudo, setPseudo] = useState(userData.pseudo);
    const [email, setEmail] = useState(userData.email);
    const [bio, setBio] = useState(userData.bio);

    const handleRegister = async (e) => {
        e.preventDefault();
        alert(pseudo)
        const titreError = document.querySelector(".pseudo.error");
        const contenueError = document.querySelector(".email.error");
        const success = document.querySelector(".success")

        await axios({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/user/${userData._id}`,
            data: {
                idlog,
                pseudo,
                email,
                bio
            },
        })
            .then((res) => {
                console.log(res);
                if (res.data.errors) {
                    titreError.innerHTML = res.data.errors.pseudo;
                    contenueError.innerHTML = res.data.errors.email;
                } else {
                    success.innerHTML = "Billet poster avec success"
                }
            })
            .catch((err) => console.log(err));
    }


    return (<>

        <form action="" onSubmit={handleRegister} id="sign-up-update" >
            <label htmlFor="pseudo" > Pseudo </label>
            <br />
            <input type="text"
                name="pseudo"
                id="pseudo"
                onChange={
                    (e) => setPseudo(e.target.value)}
                value={userData.pseudo}
            /> <div className="pseudo error"> </div> <br />
            <label htmlFor="email" > Email </label> <br />
            <input type="text"
                name="email"
                id="email"
                onChange={
                    (e) => setEmail(e.target.value)}
                value={userData.email}
            /> <div className="email error" > </div> <br />
            <label htmlFor="bio" > Biographie </label> <br />
            <textarea type="text"
                cols="33"
                rows="5"
                name="bio"
                id="bio"
                onChange={
                    (e) => setBio(e.target.value)}
                value={bio}
            /> <div className="bio error" > </div> <br />
            <input type="submit"
                value="Modifier" />
        </form> <div className="success" > </div> </>
    );
};


export default UpdateProfil;