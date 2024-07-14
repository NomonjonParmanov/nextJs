import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImg from "@/images/hero.svg";
import logo from "@/images/logo.svg";

const Hero = () => {
  return (
    <main className="container hero">
      <div className="hero__content">
        <Link href={"/"}>
          <Image src={logo} alt="logo" priority />
        </Link>
        <h1>IT-Outsourcing Company</h1>
        <h2>Frontend Developer</h2>
        <Link href={"#contact"}>
          <button>Contact</button>
        </Link>
      </div>
      <div className="hero__image">
        <Image src={heroImg} alt="hero" priority />
      </div>
    </main>
  );
};

export default Hero;
