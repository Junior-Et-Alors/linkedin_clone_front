import RegisterForm from "../components/RegisterForm";
import "./../assets/styles/authentication/register.scss";

// export default Register;
const Register = () => {
  return (
    <div className="register">
      <h2 className="registerTitle">Inscription</h2>
      <p className="registerDescription">Je m'inscris <span>gratuitement</span> sur le site</p>
      <RegisterForm />
    </div>
  );
};

export default Register;