import "./Styles/Against.css";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import redRobot from "../Images/redRobot.png";
import { Button } from "@mui/material";
import { useState } from "react";
import UrAnIdiot from "../Images/urAnid.jpg";
import amjadInfo from "../Images/amjadInfo.pdf";

const Popup = () => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon">x</span>
        <p className="pop_a">
          <div className="virus_div">
            <img className="virus" src={UrAnIdiot} alt="virus" />
          </div>
        </p>
      </div>
    </div>
  );
};

const Against = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <section className="S bluebg flexcol textwhite">
        <ul className="textwhite list">
          <img src={redRobot} alt="label" className="img_redRobot" />
          <span className="list_redspan">Breaches secure</span>
        </ul>
        <span className="details">
          <b>selling private info in the black market</b>
        </span>
        <div className="mD">
          <span className="details">
            <ul className=" ul_list">
              <li>health</li>
              <li>security</li>
              <li>communication</li>
              <li>shopping</li>
              <li>entertainment</li>
            </ul>
            <Button>
              <a className="hh" href={amjadInfo} target="_blank">
                Amjad Data
              </a>
            </Button>
          </span>

          <div className=" div_end enddiv ">
            <Card
              sx={{
                width: 130,
                height: 100,
                display: "flex",
                justifyContent: "space-evenly",
                boxShadow: "inset 19px 20px 11px -3px rgb(0 0 0 / 20%)",
              }}
            >
              <Stack
                spacing={4}
                direction="row"
                sx={{ color: "action.active" }}
              >
                <Button onClick={togglePopup}>
                  <Badge sx={{ zIndex: 0 }} color="secondary" badgeContent={1}>
                    <MailIcon />
                  </Badge>
                </Button>
              </Stack>
            </Card>
            {isOpen && <Popup />}
          </div>
        </div>
      </section>

      <section className="S flexcol ">
        <ul className=" list">
          <img src={redRobot} alt="label" className="img_redRobot" />
          <span className="list_redspan">Plagiarism</span>
        </ul>
        <span className="details">
          Answers can be found on Google, Reddit, Quora, Medium, Answerbag ..
        </span>
      </section>

      <section className="S bluebg flexcol">
        <ul className="textwhite list">
          <img src={redRobot} alt="label" className="img_redRobot" />
          <span className="list_redspan">Increases Social Disconnect</span>
        </ul>
        <span className="details">
          people prefer to stay on their electronics instead of other people.
        </span>
      </section>
    </>
  );
};

export default Against;
