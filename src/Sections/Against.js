import redRobot from "../Images/redRobot.png";
import "./Styles/Against.css";

const Against = () => {
  return (
    <>
      <section className="S bluebg ">
        <ul className="textwhite list">
          <img src={redRobot} alt="label" className="img_redRobot" />
          <span className="list_redspan">Breaches secure</span>
          <span>selling private info on black market</span>
        </ul>
      </section>

      <section className="S">
        <ul className=" list">
          <img src={redRobot} alt="label" className="img_redRobot" />
          <span className="list_redspan">Plagiarism</span>
          <span>
            Answers can be found on Google, Reddit, Quora, Medium, Answerbag ..
          </span>
        </ul>
      </section>

      <section className="S bluebg ">
        <ul className="textwhite list">
          <img src={redRobot} alt="label" className="img_redRobot" />
          <span className="list_redspan">Increases Social Disconnect</span>
          <span></span>
        </ul>
      </section>
    </>
  );
};

export default Against;
