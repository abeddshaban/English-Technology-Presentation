import blueRobot from "../Images/blueRobot.png";
import "./Styles/With.css";

const With = () => {
  return (
    <>
      <section className="S bluebg ">
        <ul className="textwhite list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span">controlling idea 1</span>
        </ul>
      </section>
      <section className="S">
        <ul className="textwhite list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span">controlling idea 2</span>
        </ul>
      </section>
      <section className="S bluebg ">
        <ul className="textwhite list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span">controlling idea 3</span>
        </ul>
      </section>
    </>
  );
};

export default With;
