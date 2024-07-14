import React from "react";
import { FaApple, FaMobileAlt } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import Image from "next/image";
import switf from "@/images/switf.svg";
import flutter from "@/images/flutter.svg";
import kotlin from "@/images/kotlin.svg";
import mobile from "@/images/mobile.png";
const Mobile = () => {
  return (
    <section id="Services" className="container mobile">
      <h1>Development of mobile applications</h1>
      <div className="mobile__content">
        <div className="mobile__image2">
          <Image src={mobile} alt="mobile" priority />
        </div>
        <div className="mobile__text">
          <p>
            In collaboration with startups, we have learned how to create a
            creative and functional user interface for mobile applications.
          </p>
          <div className="phones">
            <div className="phone">
              <FaApple className="icon" />
              <p>iOS</p>
            </div>{" "}
            <div className="phone">
              <BsAndroid2 className="icon" />
              <p>Android</p>
            </div>{" "}
            <div className="phone">
              <FaMobileAlt className="icon" />
              <p>Crossplatform</p>
            </div>
          </div>
          <h3>Technologies</h3>
          <div className="technologies">
            <div className="techno">
              <Image src={switf} alt="switf" priority />
              <p>Swift</p>
            </div>{" "}
            <div className="techno">
              <Image src={kotlin} alt="switf" priority />
              <p>Kotlin</p>
            </div>{" "}
            <div className="techno">
              <Image src={flutter} alt="flutter" priority />
              <p>Flutter</p>
            </div>
          </div>
        </div>
        <div className="mobile__image">
          <Image src={mobile} alt="mobile" priority />
        </div>
      </div>
    </section>
  );
};

export default Mobile;
