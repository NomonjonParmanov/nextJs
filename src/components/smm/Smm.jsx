import React from "react";
import smm from "@/images/smm.png";
import website from "@/images/website.svg";
import admin from "@/images/admin.svg";
import cross from "@/images/cros.svg";
import Image from "next/image";
let smms = [
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
const Smm = () => {
  let smmCard = smms?.map((el) => (
    <div key={el.id} className="smm__card">
      <Image src={el.icon} alt="title" priority />
      <p>{el.title}</p>
    </div>
  ));
  return (
    <section id="sms" className="smm container">
      <div className="smm__content">
        <div className="smm__text">
          <h1>Smsuz.uz</h1>
          <div className="smm__image2">
            <Image src={smm} alt="smm" priority />
          </div>
          <p>Smsuz.uz - It is a platform for bulk SMS messaging.</p>
          <p>What we did?</p>
          <div className="smm__cards">{smmCard}</div>
        </div>
        <div className="smm__image">
          <Image src={smm} alt="smm" priority />
        </div>
      </div>
    </section>
  );
};

export default Smm;
