const Callout = () => {

  return (
    <div className="callout">
      <div className="callout__desc">
        <h3>Stay Connected with Flixia</h3>
        <p>
          Get notified when we add new ranking movies to our special movie list,
          update our price list with promos!!
        </p>
      </div>
      <div className="callout__input">
        <input type="email" placeholder="example@gmail.com" />
        <button>Get notified</button>
      </div>
    </div>
  );
};

export default Callout;
