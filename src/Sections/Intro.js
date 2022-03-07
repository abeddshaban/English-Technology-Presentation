import "./Styles/Intro.css";
import Triangle from "./Triangle";
import label from "../Images/label.png";

const Intro = () => {
  return (
    <div className="marg0 pad0">
      {/* title */}

      <section className="S">
        <div class="title_div">
          <span class="animate-charcter">Technoligy</span>
        </div>
        <div className="doneby">
          <span>
            by: Abed AL Ghani Shaaban, Lara Husami, Mohamad Ahmad, Rein Berro
          </span>
        </div>
      </section>

      {/* def / statistics / facts / quots */}

      <section className="S  bluebg">
        <br />
        <ul className="textwhite list">
          <img src={label} alt="label" className="img_label" />
          <span className="list_span">definition</span>
        </ul>

        <ul className="textwhite list">
          <img src={label} alt="label" className="img_label" />
          <span className="list_span">statistics</span>
        </ul>

        <ul className="textwhite list">
          <img src={label} alt="label" className="img_label" />
          <span className="list_span">facts</span>
        </ul>

        <ul className="textwhite list">
          <img src={label} alt="label" className="img_label" />
          <span className="list_span">quots</span>
        </ul>
      </section>
    </div>
  );
};

export default Intro;
