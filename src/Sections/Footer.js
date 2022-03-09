import "./Styles/Footer.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import Discord from "../Images/discord.png";

const Footer = () => {
  return (
    <div className="halfS">
      <div className="textwhite footer_div">contact us at:</div>
      <section>
        <div className="textwhite">
          <div>
            <MailOutlineIcon />
            email
          </div>
          <div>
            <img className="discordimg" src={Discord} alt="" />
            discord
          </div>
          <div>
            <TwitterIcon />
            twitter
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
