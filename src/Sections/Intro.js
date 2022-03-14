import "./Styles/Intro.css";
import label from "../Images/label.png";

const Intro = () => {
  return (
    <div className="marg0 pad0">
      {/* title */}

      <section className="S">
        <div class="title_div">
          <span class="animate-charcter">Technology</span>
        </div>
        <div className="doneby">
          <span>by: Abed AL Ghani, Lara, Mohammad, Rein</span>
        </div>
      </section>

      {/* def / statistics / facts / quots */}

      <section className="S parallax">
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
            <span className="underlined">Statistics</span>: Google handles 3.8
            million searches per minute on average across the globe. That comes
            out to 228 million searches per hour, 5.6 billion searches per day,
            or 2 trillion searches per year!
          </span>
        </ul>

        <ul className="textwhite list">
          <img src={label} alt="label" className="img_label" />
          <span className="list_span">
            <span className="underlined">Facts</span>: Health apps that help you
            track diet, exercise, and mental health information.
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
