import "./Styles/With.css";
import blueRobot from "../Images/blueRobot.png";
import wtft from "../Images/wtft.png";
import gbbq from "../Images/gbbq.png";
import igg from "../Images/igg.png";
import yt from "../Images/yt.png";
import tiktok from "../Images/tiktok.png";
import netflix from "../Images/netflix.png";
import spotify from "../Images/spotify.png";
import twitch from "../Images/twitch.png";
import store from "../Images/store.png";

const With = () => {
  return (
    <>
      <section className="S bluebg flexcol">
        <ul className="textwhite list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span FredokaFont">Empowered Finance</span>
        </ul>
        {/* img */}
        <span className="details">
          Trading started, form of asset like money,100% transparent
        </span>
      </section>

      <section className="S flexcol">
        <ul className=" list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span FredokaFont">Simplifies Work</span>
        </ul>
        <div className="details div_end FredokaFont">
          {/* 1-  written mail => email => video call */}
          <table>
            <tr>
              <td>
                <img className="img_wtft" src={wtft} alt="wtft" />
              </td>
              <td> Facilitated communications</td>
            </tr>
            <tr>
              <td>
                <img className="img_wtft" src={gbbq} alt="gbbq" />
              </td>
              <td> Access to tons of information in seconds</td>
            </tr>
            <tr>
              <td>
                <img className="img_wtft" src={igg} alt="igg" />
              </td>
              <td> Access your work from anywhere</td>
            </tr>
          </table>
        </div>
      </section>

      <section className="S bluebg flexcol">
        <ul className="textwhite list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span FredokaFont">
            Provides Relaxation And Entertainment
          </span>
        </ul>

        <div className="details div_end FredokaFont textwhite">
          <table className="borderwhite">
            <tr className="borderwhite">
              <td className="borderwhite">
                <img className="img_yt" src={yt} alt="wtft" />
              </td>
              <td className="td_table borderwhite">
                Largest platform for entertainment
              </td>
            </tr>
            <tr className="borderwhite">
              <td className="borderwhite">
                <img className="img_yt" src={tiktok} alt="wtft" />
              </td>
              <td className="td_table borderwhite">
                New platform that introduced a totally different way of serving
                content and entertainment
              </td>
            </tr>
            <tr className="borderwhite">
              <td className="borderwhite">
                <img className="img_yt" src={netflix} alt="wtft" />
              </td>
              <td className="td_table borderwhite">
                Watch TV Shows, Movies, Documentaries online
              </td>
            </tr>
            <tr className="borderwhite">
              <td className="borderwhite">
                <img className="img_yt" src={twitch} alt="wtft" />
              </td>
              <td className="td_table borderwhite">
                Interactive livestreaming service
              </td>
            </tr>
            <tr className="borderwhite">
              <td className="borderwhite">
                <img className="img_yt" src={spotify} alt="wtft" />
              </td>
              <td className="td_table borderwhite"> Listen/ Stream music</td>
            </tr>
            <tr className="borderwhite">
              <td className="borderwhite">
                <img className="img_yt" src={store} alt="wtft" />
              </td>
              <td className="td_table borderwhite">Download mobile apps</td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
};

export default With;
