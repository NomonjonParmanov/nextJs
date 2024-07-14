import React from "react";
import Image from "next/image";
import archi from "@/images/archi.svg";
import auto from "@/images/auto.svg";
import stres from "@/images/stres.svg";
import load from "@/images/load.svg";
import devops from "@/images/devops.svg";
import cloud from "@/images/cloud.svg";
import erp from "@/images/erp.png";
let CRM = [
  {
    id: 1,
    icon: archi,
    title: "Architecture",
  },
  {
    id: 2,
    icon: auto,
    title: "Auto testing",
  },
  {
    id: 3,
    icon: stres,
    title: "Stress testing",
  },
  {
    id: 4,
    icon: load,
    title: "Load testing",
  },
  {
    id: 5,
    icon: devops,
    title: "Devops",
  },
  {
    id: 6,
    icon: cloud,
    title: "Cloud",
  },
];
const Optimization = () => {
  let optimizationCard = CRM?.map((el) => (
    <div key={el.id} className="optimization__card">
      <Image src={el.icon} alt="title" priority />
      <p>{el.title}</p>
    </div>
  ));
  return (
    <section id="optimization" className="optimization">
      <div className="container">
        <h1>Optimization Infrastructure</h1>
        <div className="optimization__content">
          <div className="optimization__image">
            <Image src={erp} alt="optimization" priority />
          </div>
          <div className="optimization__text">
            <p>
              Our experienced professionals will help you optimize your
              infrastructure
            </p>
            <div className="optimization__cards">{optimizationCard}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Optimization;
