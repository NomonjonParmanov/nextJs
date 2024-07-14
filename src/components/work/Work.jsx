import Image from "next/image";
import React from "react";
import phone from "@/images/phoneI.svg";
import analy from "@/images/analyI.svg";
import offer from "@/images/offerI.svg";
import team from "@/images/teamI.svg";
import start from "@/images/startI.svg";
const Work = () => {
  return (
    <section className="work container">
      <h1>How we work!</h1>
      <div className="work__content">
        <div className="work__card">
          <Image src={phone} alt="phone" priority />
          <div className="p">
            <p className="title">Сontact</p>
            <p>Send us your project request or project idea.</p>
          </div>
        </div>{" "}
        <div className="work__card">
          <Image src={analy} alt="analy" priority />
          <div className="p">
            {" "}
            <p className="title">Analysis</p>
            <p>We will contact you to clarify your project requirements.</p>
          </div>
        </div>{" "}
        <div className="work__card">
          <Image src={offer} alt="offer" priority />
          <div className="p">
            <p className="title">Offer</p>
            <p>We will provide you with our free, non-binding application.</p>
          </div>
        </div>{" "}
        <div className="work__card">
          <Image src={team} alt="team" priority />
          <div className="p">
            <p className="title">Team</p>
            <p>We provide a team for your requirements.</p>
          </div>
        </div>{" "}
        <div className="work__card">
          <Image src={start} alt="start" priority />
          <div className="p">
            <p className="title">Start </p>
            <p>You will get to know the team and we'll get started.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
