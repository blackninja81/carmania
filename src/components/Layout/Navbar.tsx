import Image from "next/image";
import Switch from "react-switch";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/Context";
import {
  AiOutlinePhone,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { BsCartPlus, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import logo from "../../assets/carsoko.png";

const Navbar = () => {
  type ThemeContextValue = {
    theme: string;
    toggleTheme: () => void;
  };

  const { theme, toggleTheme }: ThemeContextValue = useContext(ThemeContext);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <>
      {/* <div className="main-navbar"> */}
        {/* <Image alt="logo" src={logo} height={50} width={200} /> */}
        <nav className="nav">
          <a href="#" className="nav__brand">
            <Image src={logo} height={100} width={250} alt="logo-image" />
          </a>
          <ul className={active}>
            <li className="nav__item">
              <div className="nav__link">Home</div>
            </li>

            <li className="nav__item">
              <div className="nav__link">About</div>
            </li>

            <li className="nav__item">
              <div className="nav__link">Skills</div>
            </li>

            <li className="nav__item">
              <div className="nav__link">Portfolio</div>
            </li>

            <li className="nav__item">
              <div className="nav__link">Contact</div>
            </li>            
            
              <div className="pin">
          <div className="socials-nav">
            <a href="" className="me-4 text-reset">
              <i>
                <AiFillFacebook />
              </i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter">
                <AiFillTwitterSquare />
              </i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram">
                <AiFillInstagram />
              </i>
            </a>
          </div>
        </div>
          </ul>
          <Switch
                onChange={toggleTheme}
                checked={theme === "dark"}
                onColor="#08f"
                offColor="#0ff"
                uncheckedIcon={false}
                checkedIcon={false}
                uncheckedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 20,
                    }}
                  >
                    <BsFillSunFill />
                  </div>
                }
                checkedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      color: "black",
                      fontSize: 18,
                    }}
                  >
                    <BsFillMoonFill />
                  </div>
                }
              />
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      {/* </div> */}
    </>
  );
};

export default Navbar;
