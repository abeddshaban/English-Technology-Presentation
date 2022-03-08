import redRobot from "../Images/redRobot.png";
import "./Styles/Against.css";

const Against = () => {
  return (
    <>
      <section className="S bluebg flexcol">
        <ul className="textwhite list">
          <img src={redRobot} alt="label" className="img_redRobot" />
          <span className="list_redspan">Breaches secure</span>
        </ul>
        <span className="details">selling private info on black market</span>
      </section>

      <section className="S flexcol ">
        <ul className=" list">
          <img src={redRobot} alt="label" className="img_redRobot" />
          <span className="list_redspan">Plagiarism</span>
        </ul>
        <span className="details">
          Answers can be found on Google, Reddit, Quora, Medium, Answerbag ..
        </span>
      </section>

      <section className="S bluebg flexcol">
        <ul className="textwhite list">
          <img src={redRobot} alt="label" className="img_redRobot" />
          <span className="list_redspan">Increases Social Disconnect</span>
        </ul>
        <span className="details">
          people prefer to stay on their electronics instead of other people.
        </span>
      </section>
    </>
  );
};

export default Against;
