import { useState } from "react";
import "./Styles/Footer.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Discord from "../Images/discord.png";
import ReplyIcon from "@mui/icons-material/Reply";

const Info = ({ name, email, discord }) => {
  return (
    <section className="contact_section">
      <span>{name}</span>
      <span className="contact_section_span">
        <MailOutlineIcon className="mailIcon" />
        <a className="span_text" href={"mailto:" + email}>
          {email}
        </a>
      </span>
      <span className="contact_section_span">
        <img className="discordimg" src={Discord} alt="" />
        <span className="span_text">{discord}</span>
      </span>
    </section>
  );
};

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <b>Resources</b>
        <p className="pop_a">
          <span className="H">
            <a href="https://solana.com/" target="_blank">
              Solana.com
            </a>
            <ReplyIcon />
          </span>
          <span className="H">
            <a href="https://youtu.be/bBC-nXj3Ng4" target="_blank">
              How does bitcoin actually work?
            </a>
            <ReplyIcon />
          </span>
          <span className="H">
            <a
              href="https://seekingalpha.com/article/4479683-what-is-an-nft?source=acquisition_campaign_google_premium&utm_source=google&utm_medium=cpc&utm_campaign=14926960698&utm_term=133537863789%5Edsa-1635534191729%5E%5E585727700549%5E%5E%5Eg&external=true&gclid=Cj0KCQiAmpyRBhC-ARIsABs2EAqbuiGHHWiXiJp-hFTEkZgBioDi8rPMIF0EEmjQOHo74nyQo6aZtlcaAo1ZEALw_wcB"
              target="_blank"
            >
              NFTs
            </a>
            <ReplyIcon />
          </span>
          <span className="H">
            <a
              href="https://www.fastcompany.com/90310803/here-are-the-data-brokers-quietly-buying-and-selling-your-personal-information"
              target="_blank"
            >
              Here are the data brokers quietly buying and selling your personal
              information.
            </a>
            <ReplyIcon />
          </span>
          <span className="H">
            <a
              href="https://www.investopedia.com/terms/b/blockchain.asp"
              target="_blank"
            >
              Blockchain
            </a>
            <ReplyIcon />
          </span>
          <span className="H">
            <a
              href="https://www.allaroundmoving.com/how-technology-has-simplified-our-modern-life/"
              target="_blank"
            >
              How Technology Has Simplified Our Modern Life
            </a>
            <ReplyIcon />
          </span>
          {/* <a href="" target="_blank"></a> */}
        </p>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="halfS FredokaFont">
      <div className="textwhite footer_div">
        contact us at:
        <section className="footer_section">
          <Info
            name="Abed Al Ghani"
            email="abedshaaban600@gmail.com"
            discord="useless#7942"
          />

          <Info
            name="Lara"
            email="houssamilara915@gmail.com"
            discord="komi#9110"
          />

          <Info
            name="Mohammad"
            email="ma060704@gmail.com"
            discord="masterchips#4891"
          />

          <Info
            name="Rein"
            email="rein.berro@gmail.com"
            discord="wraith#6036"
          />
        </section>
        <section className="trustmebro">
          <span>trust me bro:</span>
          <span className="margleft " onClick={togglePopup}>
            <span className="textunderlined">resources</span>
            {isOpen && <Popup handleClose={togglePopup} />}
          </span>
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Footer;
