import "./Styles/Intro.css";
import Triangle from "./Triangle";

const Intro = () => {
  return (
    <div className="marg0 pad0">
      <section className="S  ">
        <div class="title_div">
          <span class="animate-charcter"> Technology</span>
        </div>
      </section>

      <section className="S  ">
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
