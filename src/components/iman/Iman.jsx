import React from "react";
import iman from "@/images/iman.png";
import website from "@/images/website.svg";
import admin from "@/images/admin.svg";
import cross from "@/images/cros.svg";
import Image from "next/image";
let imans = [
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
];
const Iman = () => {
  let imanCard = imans?.map((el) => (
    <div key={el.id} className="iman__card">
      <Image src={el.icon} alt="title" priority />
      <p>{el.title}</p>
    </div>
  ));
  return (
    <section id="iman" className="container iman">
      <div className="iman__content">
        <div className="iman__text">
          <h1>IMAN</h1>
          <div className="iman__image2">
            <Image src={iman} alt="iman" priority />
          </div>
          <p>
            Iman - It is a mutual financing platform based on the principles of
            Islamic Finance. Buyers, sellers and investors meet here.
          </p>
          <p>What we did?</p>
          <div className="iman__cards">{imanCard}</div>
        </div>
        <div className="iman__image">
          <Image src={iman} alt="iman" priority />
        </div>
      </div>
    </section>
  );
};

export default Iman;
