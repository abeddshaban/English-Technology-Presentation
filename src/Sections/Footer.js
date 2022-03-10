import "./Styles/Footer.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Discord from "../Images/discord.png";

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

const Footer = () => {
  return (
    <div className="halfS">
      <div className="textwhite footer_div">
        contact us at:
        <section className="footer_section">
          <Info
            name="Abed Al Ghani"
            email="abedshaaban600@gmail.com"
            discord="lil XA#3767"
          />

          <Info name="Lara" email="houssami915@gmail.com" discord="komi#9110" />

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
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Footer;
