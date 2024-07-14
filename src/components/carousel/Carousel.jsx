"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import taxi from "@/images/taxi.svg";
import smsuz from "@/images/smsuz.svg";
import shef from "@/images/shef.svg";
import track from "@/images/track.svg";
import akfa from "@/images/akfa.svg";
import fonon from "@/images/fonon.svg";
import hoshimov from "@/images/hoshimov.svg";
import hamkorbank from "@/images/hamkorbank.svg";
import workly from "@/images/vorkly.svg";
import imanC from "@/images/imanC.svg";
const images = [
  taxi,
  smsuz,
  shef,
  track,
  akfa,
  fonon,
  hoshimov,
  hamkorbank,
  imanC,
  workly,
  taxi,
  smsuz,
  shef,
  fonon,
  hoshimov,
  hamkorbank,
  imanC,
  workly,
  taxi,
  track,
  akfa,
  fonon,
  hoshimov,
  smsuz,
  shef,
  track,
  akfa,
  fonon,
  hoshimov,
  hamkorbank,
  imanC,
  workly,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.ceil(images.length / 10) - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="Clients" className="carousel">
      <div className="carouselImages">
        {Array.from({ length: Math.ceil(images.length / 10) }, (_, index) => (
          <div
            key={index}
            className={`carouselRow ${index === currentIndex ? "active" : ""}`}
          >
            {images
              .slice(index * 10, index * 10 + 10)
              .map((image, imgIndex) => (
                <div key={imgIndex} className="carouselItem">
                  <Image
                    src={image}
                    alt={`Slide ${imgIndex}`}
                    className="img"
                    width={150}
                    height={80}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
