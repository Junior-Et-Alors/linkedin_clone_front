import LoginForm from "../components/LoginForm";
// import "./../assets/styles/login.scss";
import "./../assets/styles/authentication/authentication.scss";

const Login = () => {
  return (
    <div className="login">
      <h2 className="loginTitle">Connexion</h2>
      <p className="loginDescription">Je me connecte à mon espace</p>
      <LoginForm />
    </div>
  );
};

export default Login;
