import "./Styles/Against.css";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import redRobot from "../Images/redRobot.png";
import { Button } from "@mui/material";
import { useState } from "react";
import Draggable from "react-draggable";
import UrAnIdiot from "../Images/urAnid.jpg";
import amjadInfo from "../Images/amjadInfo.pdf";
import plag from "../Images/plag.png";
import idea from "../Images/idea.png";
import disconnect from "../Images/disconnect.webp";

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
          <span className="list_redspan">Breaches security</span>
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

        <div className="mD">
          <span className="details">
            <h3>Technology has facilitated every single aspect of life</h3>
            <span className=" ul_list">
              Plagiarism exists in more than just digital forms as information
              can be handwritten or even printed. Therefore, rendering
              plagiarism checkers are useless most of the time.
              <div id="div1">
                <Draggable>
                  <img
                    src={idea}
                    draggable="true"
                    id="drag1"
                    width="31"
                    height="31"
                  />
                </Draggable>
              </div>
              <div id="div2"></div>
            </span>
          </span>
          <div className="details div_end FredokaFont">
            <img className="bc_img" src={plag} alt="plag" />
          </div>
        </div>
      </section>

      <section className="S bluebg flexcol">
        <ul className="textwhite list">
          <img src={redRobot} alt="label" className="img_redRobot" />
          <span className="list_redspan">Social Quarantine</span>
        </ul>

        <div className="mD">
          <span className="details textwhite">
            <span className=" ul_list">
              Technology has made it easier to connect & socialize from behind a
              screen without having to be physically present with other people
              which makes users more connected to screens than humans in real
              life.
            </span>
          </span>
          <div className="details div_end FredokaFont">
            <img className="bc_img" src={disconnect} alt="disconnect" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Against;
