import React, { useRef, useEffect } from "react";
import Header from "./Header";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const textRef = useRef(null);
  const blobContainerRef = useRef(null);

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

  // Blob animation
  useGSAP(() => {
    if (!blobContainerRef.current) return;

    const blobs = blobContainerRef.current.children;
    
    // Animate each blob with different properties
    gsap.to(blobs, {
      duration: 20,
      x: "random(-500, 500)",
      y: "random(-400, 400)",
      rotation: "random(-180, 180)",
      scale: "random(0.8, 1.2)",
      ease: "sine.inOut",
      stagger: {
        each: 2,
        repeat: -1,
        yoyo: true
      }
    });

    // Additional floating animation
    gsap.to(blobs, {
      duration: 12,
      y: "+=50",
      rotation: "+=10",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 1,
        from: "random"
      }
    });

  }, { scope: blobContainerRef });

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Animated Blobs Background */}
      <div 
        ref={blobContainerRef}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        {/* Blob 1 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 opacity-10 blur-3xl">
          <div className="w-full h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
        </div>
        
        {/* Blob 2 */}
        <div className="absolute top-1/3 right-1/4 w-80 h-80 opacity-15 blur-3xl">
          <div className="w-full h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div>
        
        {/* Blob 3 */}
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 opacity-20 blur-3xl">
          <div className="w-full h-full bg-linear-to-r from-green-400 to-emerald-500 rounded-full" />
        </div>
        
        {/* Blob 4 */}
        <div className="absolute top-1/2 right-1/3 w-64 h-64 opacity-10 blur-3xl">
          <div className="w-full h-full bg-linear-to-r from-orange-400 to-red-500 rounded-full" />
        </div>
        
        {/* Blob 5 */}
        <div className="absolute bottom-1/3 left-1/2 w-56 h-56 opacity-15 blur-3xl">
          <div className="w-full h-full bg-linear-to-r from-indigo-500 to-purple-600 rounded-full" />
        </div>
      </div>

      {/* Existing Content - All margins and padding preserved */}
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