"use client";

import helixImage from "../assets/images/helix2.png";
import emojiImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div
      className="bg-black py-[72px] sm:py-24 text-white overflow-hidden"
      ref={containerRef}
    >
      <div className="container max-w-xl relative ">
        {/* images */}
        <motion.div style={{ translateY }}>
          <Image
            src={helixImage}
            alt=""
            className="absolute hidden z-10 sm:block -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>

        <motion.div style={{ translateY }}>
          <Image
            src={emojiImage}
            alt=""
            className="absolute hidden sm:block z-10 top-6 left-[calc(100%+36px)]"
          />
        </motion.div>

        <h1 className="text-6xl font-bold text-center tracking-tighter">
          Get instant access
        </h1>
        <p className="text-xl text-white/70 leading-7 text-center mt-5 max-w-xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts
        </p>

        <form className="mt-10 flex flex-col sm:flex-row max-w-sm mx-auto gap-2.5">
          <input
            type="text"
            placeholder="your@gmail.com"
            className="px-5 py-2 bg-[#9ca3af49] rounded-lg"
          />
          <button className="px-5 py-2 bg-white text-black font-semibold rounded-lg ">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
