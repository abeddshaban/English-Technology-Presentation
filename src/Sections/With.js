import blueRobot from "../Images/blueRobot.png";
import "./Styles/With.css";

const With = () => {
  return (
    <>
      <section className="S bluebg ">
        <ul className="textwhite list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span">Empowered Finance</span>

          {/* img */}
          <span>Trading started</span>
          <span>form of asset like money</span>
          <span>100% transparent</span>
        </ul>
      </section>

      <section className="S">
        <ul className=" list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span">Simplifies Work</span>

          <span>
            {/* 1-  written mail => email => video call */}
            <table>
              WhatsApp/Telegram/Facebook/Twitter: facilitated communications
              -Google/Bing/Brave/Quora: access to tons of information in seconds
              - iCloud/google drive/GitHub: Access your work from anywhere.
            </table>
          </span>
        </ul>
      </section>

      <section className="S bluebg ">
        <ul className="textwhite list">
          <img src={blueRobot} alt="label" className="img_blueRobot" />
          <span className="list_span">
            Provides Relaxation And Entertainment
          </span>

          <span>
            <table>
              YouTube: largest platform for entertainment. Tiktok: a new
              platform that introduced a totally different way of serving
              content and entertainment. Netflix: movies. Twitch: streaming.
              Spotify: music. AppStore/Google Play: download mobile apps.
            </table>
          </span>
        </ul>
      </section>
    </>
  );
};

export default With;
