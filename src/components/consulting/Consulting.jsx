import React from "react";
import front from "@/images/front.svg";
import backend from "@/images/backend.svg";
import ux from "@/images/ux.svg";
import devops from "@/images/devops.svg";
import archi from "@/images/archi.svg";
import qa from "@/images/qa.svg";
import consulting from "@/images/consulting.svg";
import Image from "next/image";
let CONSULTINGS = [
  {
    id: 1,
    icon: front,
    title: "Frontend",
  },
  {
    id: 2,
    icon: backend,
    title: "Backend",
  },
  {
    id: 3,
    icon: archi,
    title: "Architecture",
  },
  {
    id: 4,
    icon: devops,
    title: "DevOps",
  },
  {
    id: 5,
    icon: ux,
    title: "UX/UI",
  },
  {
    id: 6,
    icon: qa,
    title: "QA",
  },
];
const Consulting = () => {
  let CONSULTING = CONSULTINGS?.map((el) => (
    <div key={el.id} className="consulting__card">
      <Image src={el.icon} alt="title" priority />
      <p>{el.title}</p>
    </div>
  ));
  return (
    <section id="consulting" className="container consulting">
      <h1>IT consulting</h1>
      <div className="consulting__content">
        <div className="consulting__image2">
          <Image src={consulting} alt="mobile" priority />
        </div>
        <div className="consulting__text">
          <p>
            We can improve the qualifications of your employees thereby
            increasing the efficiency of your company
          </p>
          <div className="consultings">{CONSULTING}</div>
        </div>
        <div className="consulting__image">
          <Image src={consulting} alt="mobile" priority />
        </div>
      </div>
    </section>
  );
};

export default Consulting;
