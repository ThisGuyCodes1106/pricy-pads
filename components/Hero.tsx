"use client";

import CustomButton from "./CustomButton";
import Image from "next/image";

function Hero() {

  const handleScroll = () => {console.log("clicked");
  }

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">Hero Title</h1>
            <p className="hero__subtitle">Hero subtitle</p>
            <CustomButton 
              title="Explore Properties"
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
              handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/house-cartoon.png" alt="hero image" fill className="object-contain px-4" />
          </div>
          <div className="hero__image-overlay" />
        </div>
    </div>
  )
}

export default Hero