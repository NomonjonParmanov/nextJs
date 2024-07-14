import React from "react";
import ux from "@/images/ux.svg";
import uI from "@/images/ui.svg";
import proto from "@/images/proto.svg";
import mobiledesign from "@/images/mobiledesign.svg";
import web from "@/images/web.svg";
import atomic from "@/images/atomic.svg";
import figma from "@/images/figma.svg";
import sketch from "@/images/sketch.svg";
import lottie from "@/images/lottie.svg";
import illustrator from "@/images/illus.svg";
import mobile from "@/images/mobile.png";
import Image from "next/image";
let DESIGNS = [
  {
    id: 1,
    icon: ux,
    title: "UX",
  },
  {
    id: 2,
    icon: uI,
    title: "UI",
  },
  {
    id: 3,
    icon: proto,
    title: "Prototyping",
  },
  {
    id: 4,
    icon: mobiledesign,
    title: "Mobile Design",
  },
  {
    id: 5,
    icon: web,
    title: "Web Design",
  },
  {
    id: 6,
    icon: atomic,
    title: "Atomic Design",
  },
];
const Design = () => {
  let DESIGN = DESIGNS?.map((el) => (
    <div key={el.id} className="design__card">
      <Image src={el.icon} alt="title" priority />
      <p>{el.title}</p>
    </div>
  ));
  return (
    <section id="ux" className="container design">
      <h1>UI / UX design</h1>
      <div className="design__content">
        <div className="design__image2">
          <Image src={mobile} alt="mobile" priority />
        </div>
        <div className="design__text">
          <p>Our company takes a human-centered approach to design</p>
          <div className="desegins">{DESIGN}</div>
          <h3>Technologies</h3>
          <div className="technologies">
            <div className="techno">
              <Image src={figma} alt="Figma" priority />
              <p>Figma</p>
            </div>{" "}
            <div className="techno">
              <Image src={sketch} alt="Sketch" priority />
              <p>Sketch</p>
            </div>{" "}
            <div className="techno">
              <Image src={lottie} alt="Lottie" priority />
              <p>Lottie</p>
            </div>{" "}
            <div className="techno">
              <Image src={illustrator} alt="Illustrator" priority />
              <p>Illustrator</p>
            </div>
          </div>
        </div>
        <div className="design__image">
          <Image src={mobile} alt="mobile" priority />
        </div>
      </div>
    </section>
  );
};

export default Design;
