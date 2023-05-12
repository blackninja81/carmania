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
  
  const { theme, toggleTheme }:ThemeContextValue = useContext(ThemeContext);

  return (
    <>
      <div className="main-navbar">
        <Image alt="logo" src={logo} height={50} width={200} />
        <div className="navbar-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Stock
              <ol>
                <li>Local Cars</li>
                <li>Import Cars</li>
              </ol>
            </li>
            <li>Contact Us</li>
            <li>Find Us</li>
            <li>Get a free Quate</li>
            
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
          </ul>
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
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
