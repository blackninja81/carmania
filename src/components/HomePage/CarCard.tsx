import React from "react";
import Image from "next/image";
import image1 from "../../assets/carousel1.jpg";
import image2 from "../../assets/carousel2.jpg";
import image3 from "../../assets/carousel3.jpg";
import image4 from "../../assets/carousel4.jpg";
import Tilt from "react-parallax-tilt";
import { TbEngine } from "react-icons/tb";
import { BsPlusCircle } from "react-icons/bs";
import { GiGearStickPattern, GiGasPump } from "react-icons/gi";
import { AiOutlineArrowRight, AiOutlineBgColors } from "react-icons/ai";

const CarCard = () => {
  return (
    // <Tilt
    //   perspective={500}
    //   glareEnable={true}
    //   glareMaxOpacity={0.45}
    //   scale={.9}
    // >
    <div className="card-main">
      <div className="card-image">
        <Image src={image1} alt="car-image" />
      </div>
      <div className="card-details">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          non aliquid, distinctio, assumenda aspernatur doloribus quisquam
          consectetur sapiente asperiores voluptate reprehenderit? Cumque nemo
          nihil adipisci.
        </p>
        {/* <button className="enquire-button">
          <h6>Enqiure</h6>
          <div className="plus-button">
            <BsPlusCircle />
          </div>
        </button>
        <button className="details-button">
          <h6>View Details</h6>
          <div className="plus-button">
            <BsPlusCircle />
          </div>
        </button> */}
        <h3>Maclaren 720</h3>
        <h3>
          KSH <span>5,900,000.00</span>
        </h3>
      </div>
      <div className="card-specs">
        <div>
          <AiOutlineArrowRight className="spec" />
          CSL1165
        </div>
        <div>
          <TbEngine className="spec" />
          3200
        </div>
        <div>
          <GiGearStickPattern className="spec" />
          Automatic
        </div>
        <div>
          <GiGasPump className="spec" />
          Diesel
        </div>
        <div>
          <AiOutlineBgColors className="spec" />
          White
        </div>
      </div>
    </div>
    // </Tilt>
  );
};

export default CarCard;
