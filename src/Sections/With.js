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
import blockchain from "../Images/blockchain.jpg";
import { Button } from "@mui/material";
import { useState } from "react";
import howbc from "../Images/howBC.png";

const With = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="S bluebg flexcol">
        <ul className="textwhite list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span FredokaFont flexRow">
            Empowers
            <div className="rotate ">
              <span className="rotate_span">Economy</span>
              <span className="rotate_span">Finance</span>
            </div>
          </span>
        </ul>
        {/* img */}
        <div className="mD">
          <span className="details">
            <ul className="textwhite ul_list">
              <li>trading on distributed exchanges in financial markets</li>
              <li>making payments faster and more secure</li>
              <li>verifying sensitive information</li>
              <li>100% transparent</li>
              <li>negligible fees</li>
            </ul>

            <span className="textwhite">
              Example: Solana's fee $0.00025 /can hadle 60,000 transactions/sec
            </span>
            <div className="margtopdiv">
              <Button onClick={togglePopup} on variant="contained">
                How it works
              </Button>
            </div>
          </span>
          {isOpen ? (
            <img className="bc_img" src={howbc} alt="blockchain" />
          ) : (
            <img className="bc_img" src={blockchain} alt="blockchain" />
          )}

          {/* <img className="bc_img" src={blockchain} alt="blockchain" /> */}
        </div>
      </section>

      <section className="S flexcol">
        <ul className=" list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span FredokaFont flexRow">
            Simplifies
            <div className="rotate ">
              <span className="rotate_span">Job</span>
              <span className="rotate_span">Task</span>
            </div>
          </span>
        </ul>
        <div className="details div_end FredokaFont">
          {/* 1-  written mail => email => video call */}
          <span className="details">
            <ul className=" ul_list">
              <span>
                Technology has facilitated every single aspect of life
              </span>
              <li>health</li>
              <li>security</li>
              <li>communication</li>
              <li>shopping</li>
              <li>entertainment</li>
            </ul>
          </span>

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
          <span className="list_span FredokaFont flexRow">
            Provides
            <div className="rotate">
              <span className="rotate_span">Relaxation</span>
              <span className="rotate_span">Entertainment</span>
            </div>
          </span>
        </ul>

        <div className="mD">
          <div>
            how technology provids relaxation and entertainment / release stress
          </div>

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
                  New platform that introduced a totally different way of
                  serving content and entertainment
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
        </div>
      </section>
    </>
  );
};

export default With;
