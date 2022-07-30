import "./../assets/styles/loginForm.scss";

const LoginForm = () => {

  return (
    <form action="" className="loginForm">
      <div className="error">Email ou mot de passe invalide</div>
      <label htmlFor="email">Email</label>
      <input
        className="input"
        type="email"
        name="email"
        id="email"
        required
      />

      <label htmlFor="password">Mot de passe</label>
      <input
        className="input password"
        type="password"
        name="password"
        id="password"
        required
      />
      <input className="input button" type="submit" value="Connexion" aria-label="Connexion" />
    </form>
  );
};

export default LoginForm;