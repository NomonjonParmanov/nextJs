import Image from "next/image";
import React from "react";
import team from "@/images/team.png";
const Team = () => {
  return (
    <section id="Command" className="team">
      <div className="container team2">
        <h2>Team</h2>
        <div className="team__content">
          <div className="team__image2">
            <Image src={team} alt="team" priority />
          </div>
          <div className="team__text">
            <p>
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            <h3>100+</h3>
            <p className="dedicated">Dedicated team</p>
          </div>
          <div className="team__image">
            <Image src={team} alt="team" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
