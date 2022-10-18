import Feature from "./feature";
import data from "../assets/features/data-saver.jpg";
import devices from "../assets/features/devices.jpg";
import user from "../assets/features/user-friendly.jpg";

const Features = () => {
  return (
    <div className="features">
      <h2>Hank Your Day</h2>
      <div className="grid grid--1x3 feature">
        <Feature
          img={devices}
          text={
            "Enjoy from the web on your phone, tablet, or select Smart Tvs---on up to 3 devices at once."
          }
          head={"Watch on any device"}
        />
        <Feature
          img={user}
          text={
            "Use our Mobile App for Movies and Live Shows, also explore actor bios, view trivia, and more."
          }
          head={"Pocket Friendly"}
        />
        <Feature
          img={data}
          text={
            "Control data usage while downloading and watching videos on phones or tablets."
          }
          head={"Data Saver"}
        />
      </div>
    </div>
  );
};

export default Features;
