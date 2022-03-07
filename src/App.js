import "./Styles/App.css";
import Intro from "./Sections/Intro";
import Triangle from "./Sections/Triangle";
import With from "./Sections/With";
// import AnimatedS from "./Sections/AnimatedS";

function App() {
  return (
    <div className="marg0 pad0 animatedbg">
      <Intro />

      {/* triangle 1 */}

      <section className="S">
        <div className="responsive">
          <Triangle
            mt="adv"
            ci1="Empowered Finance "
            ci2="Simplifies Work"
            ci3="Find Relaxation And Entertainment"
          />
        </div>
      </section>

      <With />

      {/* triangle 2  */}

      <section className="S">
        <div className="responsive">
          <Triangle
            mt="disa"
            ci1="Uncertainty/ Insecure"
            ci2=" Fast And More Rampant Plagiarism"
            ci3="Increase Social Disconnect "
          />
        </div>
      </section>
    </div>
  );
}

export default App;
