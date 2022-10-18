const Feature = ({ img, head, text }) => {
  return (
    <div className="feature">
      <img src={img} alt="features" />
      <h3>{head}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Feature;
