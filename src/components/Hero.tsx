"use client"

import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px]  relative overflow-clip">
      {/* bottom gradient */}
      <div className="absolute h-[375px] sm:h-[768px] w-[750px] sm:w-[1536px] lg:w-[2600px] lg:h-[1200px] bg-black rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

      {/* text-content */}
      <div className="container  flex flex-col items-center justify-center gap-8 relative">
        {/* link to somthing */}
        <a
          href="#"
          className="flex items-center gap-3 border border-white/30 py-1 px-2 rounded-lg"
        >
          <span className="bg-[linear-gradient(to_right,#F87BFF,#FB92CF_24%,#FFDD9B_48%,#C2F0B1_73%,#2FD8FE_100%)] to-blue-500 text-transparent bg-clip-text">
            Version 2.0 is here
          </span>
          <span className="flex items-center gap-2">
            <span>Read More</span> <ArrowIcon />
          </span>
        </a>

        {/* main heading */}
        <div className="inline-flex relative max-w-[520px]">
          <h1 className="text-7xl text-center font-bold tracking-tighter ">
            One Task <br /> at a Time
          </h1>
          {/* images */}
          <motion.div
          className="absolute right-[376px] top-[90px] hidden sm:inline"
          drag
          dragSnapToOrigin
          >
            <Image
              src={cursorImage}
              alt="cursor"
              height="200"
              width="200"
              className="max-w-none"
              draggable="false"
            />
          </motion.div>

          <motion.div
          className="absolute top-[56px] left-[398px] hidden sm:inline"
          drag
          dragSnapToOrigin
          >
            <Image
              src={messageImage}
              alt="message"
              height="200"
              width="200"
              className="max-w-none"
              draggable="false"
            />
          </motion.div>

        </div>

        {/* para text */}
        <p className="text-center text-xl max-w-[448px]">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>

        {/* button */}
        <button className="bg-white px-5 py-2 text-black rounded-lg text-[16px] font-medium text-nowrap">
          Get for free
        </button>
      </div>
    </div>
  );
};
