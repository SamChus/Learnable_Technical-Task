import { Slide } from "react-slideshow-image";
import m1 from "../assets/allMovies/m1.png";
import m2 from "../assets/allMovies/m2.png";
import m3 from "../assets/allMovies/m3.png";
import m4 from "../assets/allMovies/m4.png";
import m5 from "../assets/allMovies/m5.png";
import m6 from "../assets/allMovies/m6.png";
import m7 from "../assets/allMovies/m7.png";
import m8 from "../assets/allMovies/m8.png";
import m9 from "../assets/allMovies/m9.png";

const MoviesSlide = () => {
  const images = [m9, m1, m7, m5, m8, m4, m2, m6, m3];

  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[3]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[4]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[5]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[6]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[7]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[8]})` }}></div>
      </div>
    </Slide>
  );
};

export default MoviesSlide;
