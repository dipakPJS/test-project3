"use client"

import Putho from "@/components/putho.component";
import { motion } from "framer-motion";
import { EmblaOptionsType } from "embla-carousel";

import EmblaCarousel from "../components/Embla/EmblaCarousel.component";

const fadeInDirections = {
  top: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
  bottom: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
};

export default function Home() {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  return (
    <div className="h-full w-full">
      <div className="h-[100vh] w-full bg-black">
        <Putho />
      </div>
<div className="w-full bg-yellow-500 h-[100vh]">
<motion.div
          initial={fadeInDirections.bottom.initial}
          whileInView={fadeInDirections.bottom.animate}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap text-6xl text-red-600 justify-center gap-3 mb-[100px]"
        >This is dipak pokharel</motion.div>
</div>
<div className="w-full bg-blue-600 h-[100vh]">
<EmblaCarousel options={OPTIONS}/>
</div>
    </div>
  );
}
