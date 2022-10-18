import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero grid grid--1x2">
      <div>
        <h1>
          STREAM IT. <br /> FUN IT. <br /> JUST WITH FLIXIA.
        </h1>
        <p>
          Welcome to flixia, where you enjoy exclusive online streaming, HBO+ Originals
          as well as popular movies and TV shows at low cost. Watch now,
          cancel anytime
        </p>
      </div>
      <Link to="/login"><button className="btn btn-lg">Start your 7-day free trial</button></Link>
    </div>
  );
};

export default Hero;
