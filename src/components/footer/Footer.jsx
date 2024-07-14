import Image from "next/image";
import React from "react";
import logo from "@/images/logo.svg";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className=" container">
        <Image src={logo} alt="logo " priority />
        <div className="footer__content">
          <div className="footer__card">
            <p>About us</p>
            <ul>
              <li>
                <Link href={"#Direction"}>Direction</Link>
              </li>{" "}
              <li>
                <Link href={"#Command"}>Command</Link>
              </li>{" "}
              <li>
                <Link href={"#Tools"}>Tools</Link>
              </li>{" "}
              <li>
                <Link href={"#Clients"}>Direction</Link>
              </li>
            </ul>
          </div>
          <div className="footer__card">
            <p> Services</p>
            <ul>
              <li>
                <Link href={"#Services"}>
                  Development of mobile applications
                </Link>
              </li>
              <li>
                <Link href={"#erp"}>
                  Development and implementation ERP systems
                </Link>
              </li>
              <li>
                <Link href={"#ux"}>User interface, User experience design</Link>
              </li>
              <li>
                <Link href={"#consulting"}>IT consulting</Link>
              </li>{" "}
              <li>
                <Link href={"#optimization"}>
                  Optimization IT consulting infrastructure
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__card">
            <p>Portfolio</p>
            <ul>
              <li>
                <Link href={"#Portfolio"}>Delever</Link>
              </li>
              <li>
                <Link href={"#sms"}>Sms.uz</Link>
              </li>{" "}
              <li>
                <Link href={"#goodzone"}>Goodzone</Link>
              </li>{" "}
              <li>
                <Link href={"#iman"}>Iman</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2024 Udevs. All rights reserved</p>
          <div className="icons">
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
