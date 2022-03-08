import blueRobot from "../Images/blueRobot.png";
import "./Styles/With.css";

const With = () => {
  return (
    <>
      <section className="S bluebg flexcol">
        <ul className="textwhite list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span">Empowered Finance</span>
        </ul>
        {/* img */}
        <span className="details">
          Trading started, form of asset like money,100% transparent
        </span>
      </section>

      <section className="S flexcol">
        <ul className=" list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span">Simplifies Work</span>
        </ul>
        <span className="details">
          {/* 1-  written mail => email => video call */}
          <table>
            WhatsApp/Telegram/Facebook/Twitter: facilitated communications
            -Google/Bing/Brave/Quora: access to tons of information in seconds -
            iCloud/google drive/GitHub: Access your work from anywhere.
          </table>
        </span>
      </section>

      <section className="S bluebg flexcol">
        <ul className="textwhite list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span">
            Provides Relaxation And Entertainment
          </span>
        </ul>

        <span className="details">
          <table>
            YouTube: largest platform for entertainment. Tiktok: a new platform
            that introduced a totally different way of serving content and
            entertainment. Netflix: movies. Twitch: streaming. Spotify: music.
            AppStore/Google Play: download mobile apps.
          </table>
        </span>
      </section>
    </>
  );
};

export default With;
