"use client"

import { useEffect, useState } from "react";
import backgroundLottie from "../../public/background.json";

let Lottie: any = null;

export default function Putho() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Dynamically import Lottie only on the client
        import("lottie-react").then((module) => {
            Lottie = module.default;
            setIsClient(true);
        });
    }, []);

    return (
        <div className="h-full w-full bg-black">
            <p className="text-5xl text-white">This is dipak</p>
            {isClient && Lottie && (
                <Lottie animationData={backgroundLottie} className="h-full w-full" />
            )}
        </div>
    );
}
