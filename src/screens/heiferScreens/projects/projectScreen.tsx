

import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import vectorLogo from "../../../assets/images/Vectorlogo .png";
// import iconnotif from "../../../assets/images/iconnotif.png";
import Photodp from "../../../assets/images/Photodp.png";
import ellipsePoultry from "../../../assets/images/Ellipse 20poultry.png";
import ellipseRice from "../../../assets/images/Ellipse 20rice.png";
import ellipseTomato from "../../../assets/images/Ellipse 20tomato.png";
import "./projectStyles.css";


export const ProjectScreen = () => {
  const toast = useToast({ position: "top-right" });
  const navigate = useNavigate();

  return (
    <body className="george">
<section className="bg">
      <nav className="nav flex">
        <div className="logo">
          <img src={vectorLogo} alt="heifer logo" />
        </div>
        <div className="profile-area">
          <ul role="list" className="flex">
            {/* <li className="flex">
              <a href="#">
                <img className="notifs" src={iconnotif} alt="a bell icon" />
              </a>
            </li> */}
            <li className="flex">
              <img className="profile" src={Photodp} alt="lady" />
              Clara
            </li>
          </ul>
        </div>
      </nav>
      <div className="text flex">
        <p className="main-header">Welcome back, Clara</p>
        <p className="sub-header">What would you like to work on today?</p>
      </div>
      <div className="card-holder flex">
        <a href="#">
          <div className="carddy flex maxwidth animate">
            <img src={ellipsePoultry} alt="A chicken" />
            <p className="card-text">Poultry Value Chain</p>
          </div>
        </a>
        <a href="#">
          <div className="carddy flex maxwidth animate">
            <img src={ellipseRice} alt="Rice plants" />
            <p className="card-text">Rice Value Chain</p>
          </div>
        </a>
        <a href="#">
          <div className="carddy flex maxwidth animate">
            <img
              src={ellipseTomato}
              alt="Tomatoes"
            />
            <p className="card-text">Tomato Value Chain</p>
          </div>
        </a>
      </div>
    </section>
    </body>
    
  );
}
  






