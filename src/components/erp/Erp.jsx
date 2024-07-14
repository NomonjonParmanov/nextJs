import Image from "next/image";
import React from "react";
import erp from "@/images/erp.png";
import crm from "@/images/erp.svg";
import learn from "@/images/learn.svg";
import commerce from "@/images/commerce.svg";
import pos from "@/images/pos.svg";
import sms from "@/images/sms.svg";
import house from "@/images/house.svg";
let CRM = [
  {
    id: 1,
    icon: crm,
    title: "CRM",
  },
  {
    id: 2,
    icon: learn,
    title: "eLearning",
  },
  {
    id: 3,
    icon: commerce,
    title: "E-Commerce",
  },
  {
    id: 4,
    icon: pos,
    title: "POS",
  },
  {
    id: 5,
    icon: sms,
    title: "Sms / Email",
  },
  {
    id: 6,
    icon: house,
    title: "Warehouse",
  },
];
const Erp = () => {
  let erpCard = CRM?.map((el) => (
    <div key={el.id} className="erp__card">
      <Image src={el.icon} alt="title" priority />
      <p>{el.title}</p>
    </div>
  ));
  return (
    <section id="erp" className="erp">
      <div className="container">
        <h1>ERP systems</h1>
        <div className="erp__content">
          <div className="erp__image">
            <Image src={erp} alt="erp" priority />
          </div>
          <div className="erp__text">
            <p>
              IT Systems of any level of complexity at a convenient time for you
            </p>
            <div className="erp__cards">{erpCard}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Erp;
