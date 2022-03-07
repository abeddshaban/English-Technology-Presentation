import redRobot from "../Images/redRobot.png";
import "./Styles/Against.css";

const Against = () => {
  return (
    <>
      <section className="S bluebg ">
        <ul className="textwhite list">
          <img src={redRobot} alt="label" className="img_redRobot" />
          <span className="list_redspan">controlling idea 1</span>
        </ul>
      </section>
      <section className="S">
        <ul className=" list">
          <img src={redRobot} alt="label" className="img_redRobot" />
          <span className="list_redspan">controlling idea 2</span>
        </ul>
      </section>
      <section className="S bluebg ">
        <ul className="textwhite list">
          <img src={redRobot} alt="label" className="img_redRobot" />
          <span className="list_redspan">controlling idea 3</span>
        </ul>
      </section>
    </>
  );
};

export default Against;
