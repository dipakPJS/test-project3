"use client"
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaProvider}  from "../../context/EmblaContext"

 
import "./embla.styles.css";
 
import Image from "next/image";

import EmblaControls from "./EmblaControls.component";

const data = [
    {
        username: "dipak",
        email: "dp@gmail.com",
        phone: "909090"

    },
    {
        username: "dipak",
        email: "dp@gma434il.com",
        phone: "909090"

    },
    {
        username: "dipak",
        email: "dp@4444444gmail.com",
        phone: "909090"

    },
    {
        username: "dipak",
        email: "dp@gma434il.com",
        phone: "909090"

    },
    {
        username: "dipak344",
        email: "dp@gm434ail.com",
        phone: "909044444490"

    }
]

type PropType = {
  options?: EmblaOptionsType;
};


const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <EmblaProvider emblaApi={emblaApi}>
      <section
       
      className="embla">
        <EmblaControls />
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {data.map((item, idx) => (
              <div className="embla__slide flex-none w-full lg:w-30 md:w-3/4 sm:w-3/4" key={idx}>
                <p>{item.username}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </EmblaProvider>
  );
};

export default EmblaCarousel;