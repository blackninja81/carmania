import React from "react";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import carlight from "../../assets/carlight.png";
import cardark from "../../assets/cardark.png"
import { ThemeContext } from "@/context/Context";

const Landing = () => {
  type ThemeContextValue = {
    theme: string;
    toggleTheme: () => void;
  };
  
  const { theme }: ThemeContextValue = useContext(ThemeContext);
  const [background, setBackground] = useState<string>(theme === 'light' ? 'carlight' : 'cardark');
  
  useEffect(() => {
    setBackground(theme === 'light' ? 'carlight' : 'cardark');
  }, [theme]);
  return (
    <div className="car-landing">
      <Image src={background === 'carlight' ? carlight : cardark} alt="car-landing"height={900} width={900} />
      <div className="right-nav">
      <button>Enquire</button>
      <button>Enquire</button>
      <button>Enquire</button>
      </div> 
    </div>
  );
};

export default Landing;
