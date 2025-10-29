import React, { useRef, useEffect } from "react";
import Header from "./Header";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    const heroSplit = new SplitText("#hero-text", { type: "chars" });
    const paragraphSplit = new SplitText("#hero-paragraph", { type: "lines" });

    gsap.from(heroSplit.chars, {
      yPercent: -20,
      duration: 1.8,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.04,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.2,
      delay: 1,
    });

    textRef.current = heroSplit.chars;
  }, []);

  useEffect(() => {
    if (!textRef.current) return;

    textRef.current.forEach((char) => {
      char.style.display = "inline-block";

      char.addEventListener("mouseenter", () => {
        gsap.to(char, {
          y: -12,
          color: "#FFBC72",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      char.addEventListener("mouseleave", () => {
        gsap.to(char, {
          y: 0,
          color: "#cfcfcf",
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut",
        });
      });
    });
  }, []);

  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-row ml-[60px]">
        <div>
          <h1
            className="text-[250px] font-regular leading-[220px] mt-9 cursor-default"
            id="hero-text"
          >
            UI|<span className="greyish">UX</span>
            <br />
            DESIGNER.
          </h1>
          <p
            className="ml-3 pt-7 font-[Satoshi] font-light"
            id="hero-paragraph"
          >
            Designing with intention, for usability, clarity, and impact. Creating
            <br />
            digital experiences that feel effortless and meaningful.
          </p>
        </div>
      </div>

      {/* <div className="pt-12 ml-3 font-[Satoshi] text-center">
        <p>scroll down</p>
      </div> */}
    </div>
  );
};

export default Hero;
