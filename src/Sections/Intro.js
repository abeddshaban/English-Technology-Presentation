import "./Styles/Intro.css";
import Triangle from "./Triangle";

const Intro = () => {
  return (
    <div className="marg0 pad0">
      <section className="S bluebg ">
        {/* <h1 className="centertext marg0 pad0">Technology</h1> */}
        <div className="responsive">
          <Triangle />
          <Triangle />
        </div>
      </section>
    </div>
  );
};

export default Intro;
