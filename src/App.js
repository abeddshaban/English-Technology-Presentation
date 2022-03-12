import "./Styles/App.css";
import Intro from "./Sections/Intro";
import Triangle from "./Sections/Triangle";
import With from "./Sections/With";
import Against from "./Sections/Against";
import Footer from "./Sections/Footer";
// import AnimatedS from "./Sections/AnimatedS";

function App() {
  return (
    <div className="marg0 pad0 animatedbg">
      <Intro />

      {/* triangle 1 */}

      <section className="S">
        <div className="responsive">
          <Triangle
            mt="Advantages"
            ci1="Empowers Finance"
            ci2="Simplifies Work"
            ci3="Provides Relaxation And Entertainment"
          />
        </div>
      </section>

      <With />

      {/* triangle 2  */}

      <section className="S">
        <div className="responsive">
          <Triangle
            mt="Disadvantage"
            ci1="Breaches security"
            ci2="Plagiarism"
            ci3="Increases Social Disconnect"
          />
        </div>
      </section>

      <Against />

      {/* footer  */}

      <Footer />
    </div>
  );
}

export default App;
