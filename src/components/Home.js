import React, { useRef } from "react";
import CustomHook from "./CustomHook";
function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          HI, MY NAME IS <br />
          <span>HÀ THIỆN TỶ</span>
        </div>
        <div className="des">
          I’m a passionate Full-stack developer with 2 years experience,
          primarily focusing on Back-end development. Enthusiastic about
          crafting exceptional web solutions, I have extensive experience with
          real-world projects and enjoy collaborating with others. Committed to
          delivering high-quality results, I continuously improve my skills in a
          dynamic tech environment. I’m adaptable, creative, and driven to
          contribute effectively to challenging projects.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="/HaThienTy-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="animation active "
            download
          >
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
