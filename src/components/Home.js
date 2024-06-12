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
          I’m a passionate developer who takes quality over quantity. I love to
          research new technologies by reading blogs to have better technical
          decisions. My goal is to become a tech lead in the next 3 years.
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
