import regImage from "../assets/bg/bg5x.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: " ",
    email: " ",
    password: " ",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Sign Up Successful");
    setInterval(() => {
      window.location = "/login";
    }, 1000);
  };

  return (
    <div className="grid--12 sign-up">
      <ToastContainer />
      <img src={regImage} alt="movie" />

      <div className="login__input">
        <h1>Flixia!</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={handleChange}
          />

          <div className="login__flex">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              onChange={handleChange}
            />
            <p onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "hide" : "show"}
            </p>
          </div>
          <div className="login__flex">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            <p onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "hide" : "show"}
            </p>
          </div>
          <button className="btn btn-sm">SIGN UP</button>
        </form>

        <div className="sign-up__footer">
          <p>
            Already have an account. <Link to="/login">LOGIN</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
