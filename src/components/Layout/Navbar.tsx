import React from "react";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import {
  AiOutlinePhone,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import logo from "../../assets/carsoko.png";

const Navbar = () => {
  return (
    <>
    <div className="main-navbar">
      <Image alt="logo" src={logo} height={100} width={350} />
      <div className="pin">
        <div className="locate">
          <FiMapPin />
          <p>
            Limuru Road <br></br>next to Village Market Nairobi
          </p>
        </div>
        <div className="phone">
          <AiOutlinePhone />
          <p>
            +254 722 797787<br></br>
            +254 722 876 102
          </p>
        </div>
      </div>
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
    </>
  );
};

export default Navbar;
