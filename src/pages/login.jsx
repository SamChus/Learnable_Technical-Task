import { useState } from "react";
import loginImage from "../assets/bg/bg3.jpg";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: " ",
    password: " ",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login Successful");
    setInterval(() => {
      window.location = "/";
    }, 1000);
  };

  return (
    <div className="grid--12 login">
      <ToastContainer />
      <img src={loginImage} alt="movie" />

      <div className="login__input">
        <h1>Welcome Back!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email address"
            onChange={handleChange}
          />
          <div className="login__flex">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Your Password"
              onChange={handleChange}
            />
            <p onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "hide" : "show"}
            </p>
          </div>
          <button className="btn">LOGIN</button>
        </form>
        <div className="login__footer">
          <Link to={"/signUp"}>Create an account</Link>
          <Link to={"/signUp"}>Forgot password</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
