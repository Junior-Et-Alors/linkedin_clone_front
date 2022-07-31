import React, { useState } from "react";
import axios from "axios";
import { validateEmail, validateAge } from './../utils/functions';

// Common styles with LoginForm component
import "../assets/styles/authenticationForm.scss";
// Specific styles to RegisterForm component
import "../assets/styles/registerForm.scss";

const RegisterForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstNameError = document.querySelector(".firstName.error");
    const lastNameError = document.querySelector(".lastName.error");
    const birthdateError = document.querySelector(".birthdate.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".passwordConfirm.error"
    );
    const terms = document.getElementById("terms");
    const termsError = document.querySelector(".terms.error");

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    if(firstName.length < 2) {
      firstNameError.textContent = "Votre prénom doit faire 2 caractères au minimum";
    } else {
      firstNameError.textContent = "";
    }

    if(lastName.length < 2) {
      lastNameError.textContent = "Votre nom doit faire 2 caractères au minimum";
    } else {
      lastNameError.textContent = "";
    }

    if(!birthdate) {
      birthdateError.textContent = "Vous devez entrer une date de naissance";
    } else {
      // if the value is not empty, check if age < 16
      const age = validateAge(birthdate);
      if (age < 16) {
        birthdateError.textContent = "Date incorrecte. Vous devez avoir au moins 16 ans pour continuer."
      } else {
        birthdateError.textContent = "";
      }
    }

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

    if (password !== controlPassword) {
      passwordConfirmError.innerHTML =
        "Les mots de passe ne correspondent pas"
    } else {
      passwordConfirmError.innerHTML = "";
    }
  
    if (!terms.checked) {
      termsError.innerHTML = "Veuillez valider les conditions générales";
    } else {
      termsError.innerHTML = "";

    if (firstNameError.textContent === "" && lastNameError.textContent === "" && birthdateError.textContent === "" && emailError.textContent === "" && passwordError.textContent === "" && passwordConfirmError.innerHTML === "") {
      setFormSubmit(true);
    }
      
      // await axios({
      //   method: "post",
      //   url: `${process.env.REACT_APP_API_URL}api/user/register`, //TODO route à modifier
      //   data: {
      //     firstName,
      //     lastName,
      //     birthdate,
      //     email,
      //     password,
      //   },
      // })
      // .then((res) => {
      //   console.log(res);
      //   if (res.data.errors) {
      //     firstNameError.innerHTML = res.data.errors.firstname;
      //     lastNameError.innerHTML = res.data.errors.lastname;
      //     birthdateError.innerHTML = res.data.errors.birthdate;
      //     emailError.innerHTML = res.data.errors.email;
      //     passwordError.innerHTML = res.data.errors.password;
      //   } else {
      //     setFormSubmit(true);
      //   }
      // })
      // .catch((err) => console.log(err));
    }
  }

  const redirectLogin = () => {
    setTimeout(() => {
    window.location = "/login";
  },2000)
  };

  return (
    <>
      {formSubmit ? (
        <>
        <h4 className="success">
          Enregistrement réussi, veuillez-vous connecter.
        </h4>
        {redirectLogin()}
         
        </>
      ) : (

        <form action="" onSubmit={handleSubmit} className="registerForm" noValidate>
        <div className="errorRegister">Une erreur s'est produite lors de la tentative d'inscription. Veuillez réessayer ultérieurement.</div>
          <label htmlFor="first">Votre prénom*</label>
          <input
            className="input"
            type="text"
            id="first"
            name="first"
            minLength="2"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <div className="firstName error"></div>

          <label htmlFor="last">Votre nom*</label>
          <input
            className="input"
            type="text"
            id="last"
            name="last"
            minLength="2"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <div className="lastName error"></div>

          <label htmlFor="birthdate">Votre date de naissance*</label>
          <input
            className="input"
            type="date"
            id="birthdate"
            name="birthdate"
            onChange={(e) => setBirthdate(e.target.value)}
            value={birthdate}
          />
          <div className="birthdate error"></div>

          <label htmlFor="email">Votre email*</label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>

          <label htmlFor="password">Votre mot de passe*</label>
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            minLength="4"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>

          <label htmlFor="controlPassword">Confirmez mot de passe*</label>
          <input
            className="input"
            type="password"
            name="controlPassword"
            id="controlPassword"
            minLength="4"
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <div className="passwordConfirm error"></div>

          <div className="termsContainer">
          <input className="termsCheckbox" type="checkbox" id="terms" name="terms" required/>
            <label htmlFor="terms" className="termsLabel">
              J'accepte les{" "}
              <a href="/" target="_blank" rel="noopener noreferrer">
                conditions générales
              </a>
            </label>
            </div>
            <div className="terms error"></div>
          <input className="input button" type="submit" value="Connexion" aria-label="Connexion" />
        </form>
      )}
    </>
  );
};

export default RegisterForm;