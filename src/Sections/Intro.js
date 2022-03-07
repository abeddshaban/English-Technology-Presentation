import "./Styles/Intro.css";
import Triangle from "./Triangle";
import label from "../Images/label.png";

const Intro = () => {
  return (
    <div className="marg0 pad0">
      {/* title */}

      <section className="S  ">
        <div class="title_div">
          <span class="animate-charcter"> Technoligy</span>
        </div>
        <div className="doneby">
          <span>
            by: Abed AL Ghani Shaaban, Lara Husami, Mohamad Ahmad, Rein Berro
          </span>
        </div>
      </section>

      {/* def / statistics / facts / quots */}

      <section className="S  bluebg">
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

      <section className="S">
        <div className="responsive">
          <Triangle
            mt="adv"
            ci1="Empowered Finance "
            ci2="Simplifies Work"
            ci3="Find Relaxation And Entertainment"
          />
          <Triangle
            mt="disa"
            ci1="Uncertainty/ Insecure"
            ci2=" Fast And More Rampant Plagiarism"
            ci3="Increase Social Disconnect "
          />
        </div>
      </section>
      <section className="S bluebg "></section>
    </div>
  );
};

export default Intro;
