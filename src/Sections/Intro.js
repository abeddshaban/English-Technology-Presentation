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
          <span>by: Abed AL Ghani, Lara, Mohamad, Rein</span>
        </div>
      </section>

      {/* def / statistics / facts / quots */}

      <section className="S  bluebg">
        <br />
        <ul className="textwhite list">
          <img src={label} alt="label" className="img_label" />
          <span className="list_span">
            <span className="underlined">Definition</span>: Methods, skills,
            systems or devices to serve a particular purpose.
            <br />
            (example : television, games =&gt; entertainment )
          </span>
        </ul>

        <ul className="textwhite list">
          <img src={label} alt="label" className="img_label" />
          <span className="list_span">
            <span className="underlined">Statistics</span>:
          </span>
        </ul>

        <ul className="textwhite list">
          <img src={label} alt="label" className="img_label" />
          <span className="list_span">
            <span className="underlined">Facts</span>:
          </span>
        </ul>

        <ul className="textwhite list">
          <img src={label} alt="label" className="img_label" />
          <span className="list_span">
            <span className="underlined">Quote</span>:
            <q> Technology is a useful servant but a dangerous master.</q>
            {"    "}Christian Lous Lange, Historian
          </span>
        </ul>
      </section>
    </div>
  );
};

export default Intro;
