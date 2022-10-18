import Header from "../components/header";
import Hero from "../components/hero";
import Features from "../components/features";
import Callout from "../components/callout";
import Footer from "../components/footer";
import MoviesSlide from "../components/moviesSlide";

const LandingPage = () => {
  return (
    <div className="home__container">
      <Header />
      <Hero />
      <MoviesSlide />
      <Features />
      <Callout />
      <Footer />
    </div>
  );
};

export default LandingPage;
