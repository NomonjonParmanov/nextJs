"use client";
import React, { useState } from "react";
import { TOOLS } from "@/static";
import Image from "next/image";

const Tools = () => {
  const [tools, setTools] = useState("");

  const handleChange = (e) => {
    setTools(e.target.value);
  };

  const toolCards = TOOLS?.map((el) => (
    <div
      key={el.title}
      className="tool__card"
      style={{ backgroundColor: el.tool === tools ? "#a8bfff" : "" }}
    >
      <Image src={el.icon} alt={el.title} priority />
      <p>{el.title}</p>
    </div>
  ));

  return (
    <section className="container tools" id="Tools">
      <h1>Tools</h1>
      <form>
        <div className="inp1">
          <input
            name="tools"
            type="radio"
            id="Frontend"
            value="Frontend"
            checked={tools === "Frontend"}
            onChange={handleChange}
          />
          <label htmlFor="Frontend">Frontend</label>
        </div>
        <div className="inp1">
          <input
            name="tools"
            type="radio"
            id="Backend"
            value="Backend"
            checked={tools === "Backend"}
            onChange={handleChange}
          />
          <label htmlFor="Backend">Backend</label>
        </div>
        <div className="inp1">
          <input
            name="tools"
            type="radio"
            id="Devops"
            value="Devops"
            checked={tools === "Devops"}
            onChange={handleChange}
          />
          <label htmlFor="Devops">Devops</label>
        </div>
        <div className="inp1">
          <input
            name="tools"
            type="radio"
            id="Testing"
            value="Testing"
            checked={tools === "Testing"}
            onChange={handleChange}
          />
          <label htmlFor="Testing">Testing</label>
        </div>
        <div className="inp1">
          <input
            name="tools"
            type="radio"
            id="UX/UI"
            value="UX/UI"
            checked={tools === "UX/UI"}
            onChange={handleChange}
          />
          <label htmlFor="UX/UI">UX/UI</label>
        </div>
        <div className="inp1">
          <input
            name="tools"
            type="radio"
            id="Infrastructure"
            value="Infrastructure"
            checked={tools === "Infrastructure"}
            onChange={handleChange}
          />
          <label htmlFor="Infrastructure">Infrastructure</label>
        </div>
        <div className="inp1">
          <input
            name="tools"
            type="radio"
            id="Mobile"
            value="Mobile"
            checked={tools === "Mobile"}
            onChange={handleChange}
          />
          <label htmlFor="Mobile">Mobile</label>
        </div>
      </form>
      <div className="tool__cards">{toolCards}</div>
    </section>
  );
};

export default Tools;
