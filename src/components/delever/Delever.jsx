import React from "react";
import delever from "@/images/delevery.png";
import website from "@/images/website.svg";
import admin from "@/images/admin.svg";
import cross from "@/images/cros.svg";
import web from "@/images/web.svg";
import mobile from "@/images/mobiledesign.svg";
import Image from "next/image";
let delevers = [
  {
    id: 1,
    icon: website,
    title: "Website",
  },
  {
    id: 2,
    icon: admin,
    title: "Admin panel",
  },
  {
    id: 3,
    icon: cross,
    title: "Crossplatform",
  },
  {
    id: 4,
    icon: web,
    title: "Web design",
  },
  {
    id: 5,
    icon: mobile,
    title: "Mobile design",
  },
];
const Delever = () => {
  let deleverCard = delevers?.map((el) => (
    <div key={el.id} className="delever__card">
      <Image src={el.icon} alt="title" priority />
      <p>{el.title}</p>
    </div>
  ));
  return (
    <section id="Portfolio" className="delever container">
      <h1>Delever</h1>
      <div className="delever__content">
        <div className="delever__image">
          <Image src={delever} alt="delever" priority />
        </div>
        <div className="delever__text">
          <p>
            Delever - Delivery service automation targeted at both consumers and
            restaurants.
          </p>
          <p>What we did?</p>
          <div className="delever__cards">{deleverCard}</div>
        </div>
      </div>
    </section>
  );
};

export default Delever;
