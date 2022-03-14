import "./Styles/App.css";
import Intro from "./Sections/Intro";
import Triangle from "./Sections/Triangle";
import With from "./Sections/With";
import Against from "./Sections/Against";
import Footer from "./Sections/Footer";
import QRcode from "./Images/QRcode.png";

function App() {
  return (
    <div className="marg0 pad0 animatedbg">
      <Intro />

      {/* triangle 1 */}

      <section className="S goodCharecter">
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

      <section className="S badCharecter">
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

      {/* thanks for watching */}

      <section className="S ">
        <div className="w100">
          <span className="thx FredokaFont textShineBlack">
            thank you for your attention
          </span>
        </div>
        <div className="qr_div">
          <img className="qrimg" src={QRcode} alt="" />
        </div>
      </section>

      {/* footer  */}

      <Footer />
    </div>
  );
}

export default App;
