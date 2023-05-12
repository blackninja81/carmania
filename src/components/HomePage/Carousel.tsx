import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import image1 from '../../assets/carousel1.jpg'
import image2 from '../../assets/carousel2.jpg'
import image3 from '../../assets/carousel3.jpg'
import image4 from '../../assets/carousel4.jpg'

const Carousel = () => {
  return (
    <Splide className="carousel-images" options={{
      // fixedWidth: 2000
      perPage: 1,
      gap: 10,
      autoplay:true,
      autoWidth:true,
      speed:1000,
      rewindSpeed:1000,
      rewind:true
    }}>
      <SplideSlide>
        <Image src={image1} alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <Image src={image2} alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <Image src={image3} alt="Image 3" />
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
