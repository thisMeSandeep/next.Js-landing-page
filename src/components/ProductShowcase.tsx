"use client";

import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-[linear-gradient(to_bottom,#000_0%,#5D2CA8_100%)] py-[72px] sm:py-24 text-white overflow-hidden">
      <div className="container ">
        <h1 className="text-6xl font-bold text-center tracking-tighter">
          Intuitive interface
        </h1>
        <p className="text-xl text-white/70 leading-7 text-center mt-5 max-w-xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>

        {/* product image */}
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={appScreen}
            alt="product_srs"
            className="block mx-auto mt-14"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  );
};
