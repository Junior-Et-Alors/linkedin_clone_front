import React, { useState } from "react";
import axios from "axios";
import { validateEmail } from "../utils/functions";
// Common styles with RegisterForm component
import "./../assets/styles/authenticationForm.scss";
// Specific styles to LoginForm component
import "./../assets/styles/loginForm.scss";

const LoginForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirectHome = () => {
    setTimeout(() => {
    window.location = "/";
  },2000)
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    if(validateEmail(email)) {
      emailError.textContent = ""
    } else {
      emailError.textContent = "Votre email doit avoir un format valide";
    }

    if(password.length < 4) {
      passwordError.textContent = "Votre mot de passe doit faire au moins 4 caractères";
    } else {
      passwordError.textContent = "";
    }
  
    if (emailError.textContent === "" &&  passwordError.textContent === "") {
      setFormSubmit(true);
    }

    // await axios({
    //   method: "post",
    //   url: `${process.env.REACT_APP_api_url}api/user/login`, // TODO url à modifier
    //   withCredentials: true,
    //   data: {
    //     email,
    //     password,
    //   },
    // })
    // .then((res) => {
    //     console.log(res);
    //     if (res.data.errors) {
    //       emailError.innerHTML = res.data.errors.email;
    //       passwordError.innerHTML = res.data.errors.password;
    //     } else {
    //       window.location = "/";
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <>
      {formSubmit ? (
        <>
        <h4 className="success">
          Connexion réussie.
        </h4>
        {redirectHome()}
         
        </>
      ) : (

        <form action="" onSubmit={handleLogin} className="loginForm" noValidate>
          <div className="errorLogin">Email ou mot de passe invalide</div>
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>

          <label htmlFor="password">Mot de passe</label>
          <input
            className="input loginPassword"
            type="password"
            name="password"
            id="password"
            minLength="4"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
          <input className="input button" type="submit" value="Connexion" aria-label="Connexion" />
        </form>
      )}
    </>
  );
};

export default LoginForm;