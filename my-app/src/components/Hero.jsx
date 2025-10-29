import React, { useRef, useEffect } from "react";
import Header from "./Header";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const scrambleText = useRef(null);

  // Initialize SplitText for animations
  useGSAP(() => {
    const heroSplit = new SplitText("#hero-text", { type: "words,chars" });
    const paragraphSplit = new SplitText("#hero-paragraph", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: -50,
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

    scrambleText.current = heroSplit.chars; // store chars for scramble effect
  }, []);

  // Scramble animation logic
  const handleMouseEnter = (char, original) => {
    const randomChars = "UIUXDESIGNER";
    let iterations = 0;
    const interval = setInterval(() => {
      char.textContent = randomChars[Math.floor(Math.random() * randomChars.length)];
      iterations++;
      if (iterations > 10) {
        clearInterval(interval);
        char.textContent = original;
      }
    }, 40);
  };

  useEffect(() => {
    if (!scrambleText.current) return;

    scrambleText.current.forEach((char) => {
      const original = char.textContent;
      char.addEventListener("mouseenter", () => handleMouseEnter(char, original));
    });

    return () => {
      scrambleText.current.forEach((char) => {
        char.removeEventListener("mouseenter", () => handleMouseEnter(char, char.textContent));
      });
    };
  }, []);

  return (
    <div className="h-[100vh]">
      <Header />
      <div className="flex flex-row ml-[60px]">
        <div>
          <div>
            <h1
              className="text-[250px] font-regular leading-[220px] mt-[36px] cursor-default"
              id="hero-text"
            >
              UI|<span className="greyish">UX</span>
              <br />
              DESIGNER.
            </h1>
            <p
              className="ml-[12px] pt-[28px] font-[Satoshi] font-light"
              id="hero-paragraph"
            >
              Designing with intention, for usability, clarity, and impact. Creating
              <br />
              digital experiences that feel effortless and meaningful.
            </p>
          </div>
        </div>

        {/* <div className="absolute right-0 bottom-0 mr-[30px] w-[400px] h-auto overflow-hidden">
          <img
            src="/images/heroimg.png"
            alt="hero"
            className="object-contain z-99 w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-b from-transparent to-black" />
        </div> */}
      </div>
      <div className="pt-12 ml-[12px] font-[Satoshi] text-center">
        <p>scroll down</p>
      </div>
    </div>
  );
};

export default Hero;
