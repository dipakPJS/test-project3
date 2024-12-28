"use client"

import Putho from "@/components/putho.component";
import { motion } from "framer-motion";
import { EmblaOptionsType } from "embla-carousel";
import { CgArrowTopLeftO } from "react-icons/cg";

import Marquee from "react-fast-marquee"

import EmblaCarousel from "../components/Embla/EmblaCarousel.component";
import MainContactFormComponent from "@/components/contactform/MainContactForm.component";
import { ShootingStarsComponent } from "@/components/ShootingStart.component";

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
<div className="w-full bg-green-600 h-[100vh]">
 <MainContactFormComponent />
 <CgArrowTopLeftO className="text-5xl text-[red]"/>
</div>
<div className="w-full h-[100vh] bg-[black]">
<Marquee
            speed={300}
            autoFill={true}
            pauseOnHover={false}
            loop={0}
            gradient={true}
            gradientColor="black"
            gradientWidth={300}
            className="h-[200px] text-white w-full"
          >
            This is dipak
          </Marquee>
</div>
<div className="min-h-screen bg-black w-full relative">
  <div className="absolute inset-0">
  <ShootingStarsComponent />
  </div>
</div>
    </div>
  );
}
