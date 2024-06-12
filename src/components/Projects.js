import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Projects() {
  const [listProjects] = useState([
    {
      name: "Vinachain Swap",
      mission: "Back-end Developer",
      images: "/logo_light.svg",
      link: "https://swap.vinachain.io/login",
    },
    {
      name: "Cryptocurrency exchange",
      mission: "Back-end Developer",
      images: "/codex.png",
      link: "https://tradingcme.com",
    },
    {
      name: "Weknot Social",
      mission: "Front-end Developer & Back-end Developer",
      images: "/weknot_logo.svg",
      link: "https://social-staging.augmentlabs.io/",
    },
    {
      name: "AugmentLabs Stablecoin Universe",
      mission: "Front-end Developer & Back-end Developer",
      images: "/augmentlabs.png",
      link: "https://augmentlabs.io",
    },
    {
      name: "DoctorOnCall",
      mission: "Front-end Developer & Back-end Developer",
      images: "/doctoroncall.png",
      link: "https://www.doctoroncall.com",
    },
    {
      name: "Top Menu",
      mission: "Front-end Developer & Back-end Developer",
      images: "/top-menu.png",
      link: "https://topmenu.vn",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Projects
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="images">
              <img src={value.images} alt=""  />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <a
                    href={value.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    DEMO
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
