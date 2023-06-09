import React from "react";
import Image from "next/image";
import { TbEngine } from "react-icons/tb";
import { Cars } from "@/constants/constants";
import image1 from "../../assets/carousel1.jpg";
import { GiGearStickPattern, GiGasPump } from "react-icons/gi";
import { AiOutlineArrowRight, AiOutlineBgColors } from "react-icons/ai";
import Link from "next/link";

const CarCard = () => {
  return (
    <>
      {Cars.slice(0,5).map((car) => (
        <div key={car.id} className="card-main">
          <Link className="car-link" href='/Cars' target='_blank'>
          <div className="card-image">
            <Image src={car.image} width={350} height={250} alt={car.name} />
          </div>
          <div className="card-details">
            <p>{car.description.substring(0, 250)}...</p>
            <h3>{car.name}</h3>
            <h3>
              KSH <span>{car.price}</span>
            </h3>
          </div>
          <div className="card-specs">
            <div>
              <AiOutlineArrowRight className="spec" />
              {car.id}
            </div>
            <div>
              <TbEngine className="spec" />
              {car.cc}
            </div>
            <div>
              <GiGearStickPattern className="spec" />
              {car.transmission}
            </div>
            <div>
              <GiGasPump className="spec" />
              {car.fuel}
            </div>
            <div>
              <AiOutlineBgColors className="spec" />
              {car.color}
            </div>
          </div>
        </Link>
        </div>
      ))}
    </>
  );
};

export default CarCard;
