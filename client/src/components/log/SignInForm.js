import React, { useReducer, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    const userData = useSelector((state) => state.userReducer);
    console.log(userData);

    const handleLogin = (e) =>{
        e.preventDefault();
        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials: true,
            data: {
                email,
                password
            },
        })
        .then((res =>{
            if(res.data.errors){
                emailError.innerHTML = res.data.errors.email;
                passwordError.innerHTML = res.data.errors.password;
            }
            else{
                window.location = "/";
            }
        }))
        .catch((err) =>{
            console.log(err);
        });
    };
    return (
        <div>
            <form action="" onSubmit={handleLogin}>
                <label htmlFor="email">Email</label><br></br>
                <input
                type="text"
                name="email"
                id="email"
                onChange = {(e) => setEmail(e.target.value)}
                value={email}
                />
                <div class="email error"></div>
                <label htmlFor="password">password</label><br></br>
                <input
                type="password"
                name="password"
                id="password"
                onChange = {(e) => setPassword(e.target.value)}
                value={password}
                />
                <div class="password error"></div><br></br>

                <input type="submit" value="Se connecter"></input>
            </form>
        </div>
    );
};

export default SignInForm;