import React from "react";
import {
  IoPeopleSharp,
  IoPhonePortraitOutline,
  IoSettings,
  IoLaptopOutline,
} from "react-icons/io5";
import { MdOutlineScatterPlot } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";

let SERVICES = [
  {
    id: 1,
    icon: <IoPeopleSharp className="icon" />,
    title: "Team",
  },
  {
    id: 2,
    icon: <IoPhonePortraitOutline className="icon" />,
    title: "Development of mobile applications",
  },
  {
    id: 3,
    icon: <IoSettings className="icon" />,
    title: "Development and implementation ERP systems",
  },
  {
    id: 4,
    icon: <MdOutlineScatterPlot className="icon" />,
    title: "User interface, User experience design",
  },
  {
    id: 5,
    icon: <SiHiveBlockchain className="icon" />,
    title: "Optimization IT consulting infrastructure",
  },
  {
    id: 6,
    icon: <IoLaptopOutline className="icon" />,
    title: "IT consulting",
  },
];

const Services = () => {
  let service = SERVICES?.map((el) => (
    <div className="service__card" key={el.id}>
      <div className="icon">{el.icon}</div>
      <p>{el.title}</p>
    </div>
  ));
  return (
    <section id="Direction" className="container service">
      <h1>Our services</h1>
      <div className="service__content">{service}</div>
    </section>
  );
};

export default Services;
