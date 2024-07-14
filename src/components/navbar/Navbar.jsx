"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/images/logo.svg";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import mobile from "@/images/mobileI.svg";
import optimization from "@/images/setting.svg";
import erp from "@/images/erpI.svg";
import consulting from "@/images/webI.svg";
import ux from "@/images/design.svg";
import goodzone from "@/images/goodzoneI.svg";
import iman from "@/images/imanI.svg";
import delever from "@/images/deleverI.svg";
import sms from "@/images/smsI.svg";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(false);
  };
  return (
    <nav>
      <div className="container navbar">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={50} priority />
        </Link>
        <ul>
          <li key="direction">
            <Link href="#Direction">Direction</Link>
          </li>
          <li key="command">
            <Link href="#Command">Command</Link>
          </li>
          <li className="dropdown" key="services">
            <Link className="drop" href="#Services">
              Services
              <FaAngleDown className="icon1" />
            </Link>
            <div className="dropdown-content">
              <p>Services</p>
              <Link href={"#Services"}>
                <div className="icon">
                  <Image src={mobile} alt="mobile" priority />
                </div>
                Development of mobile applications
              </Link>
              <Link href={"#erp"}>
                <div className="icon">
                  <Image src={erp} alt="mobile" priority />
                </div>
                Development and implementation ERP systems
              </Link>
              <Link href={"#ux"}>
                <div className="icon">
                  <Image src={ux} alt="mobile" priority />
                </div>
                UX/UI design User interface, User experience design
              </Link>
              <Link href={"#consulting"}>
                <div className="icon">
                  <Image src={consulting} alt="mobile" priority />
                </div>
                IT Consulting
              </Link>
              <Link href={"#optimization"}>
                <div className="icon">
                  <Image src={optimization} alt="mobile" priority />
                </div>
                Optimization Optimization IT consulting infrastructure
              </Link>
            </div>
          </li>
          <li key="tools">
            <Link href="#Tools">Tools</Link>
          </li>
          <li key="clients">
            <Link href="#Clients">Clients</Link>
          </li>
          <li className="dropdown" key="portfolio">
            <Link className="drop" href="#Portfolio">
              Portfolio
              <FaAngleDown className="icon1" />
            </Link>
            <div className="dropdown-content">
              <p>Portfolio</p>
              <Link href={"#Portfolio"}>
                <div className="icon">
                  <Image src={delever} alt="delever" priority />
                </div>
                Delever
              </Link>{" "}
              <Link href={"#sms"}>
                <div className="icon">
                  <Image src={sms} alt="sms" priority />
                </div>
                Smsuz.uz
              </Link>{" "}
              <Link href={"#goodzone"}>
                <div className="icon">
                  <Image src={goodzone} alt="goodzone" priority />
                </div>
                Goodzone
              </Link>{" "}
              <Link href={"#iman"}>
                <div className="icon">
                  <Image src={iman} alt="iman" priority />
                </div>
                Iman
              </Link>
            </div>
          </li>
          <li key="language">
            <Link href="#Language">Language</Link>
          </li>{" "}
          <li key="contact">
            <Link href="#contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
        <button onClick={() => setToggle(!toggle)} className="media__btn">
          {toggle ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>
      <div className={`${toggle ? "media__nav" : "media__nav2"}`}>
        <ul>
          <li onClick={handleToggle}>
            {" "}
            <Link href={"#Direction"}>Services</Link>
          </li>{" "}
          <li onClick={handleToggle}>
            {" "}
            <Link href={"#clients"}>Clients</Link>
          </li>{" "}
          <li onClick={handleToggle}>
            {" "}
            <Link href={"#Command"}>Command</Link>
          </li>{" "}
          <Link onClick={handleToggle} href={"#contact"}>
            <button>Contact</button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
