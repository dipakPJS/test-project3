"use client"
import dynamic from "next/dynamic";

const BackgroundAnimation = dynamic(() => import("./BackgroundLottie.component"), { ssr: false });

export default function putho() {
    return (
        <div className="w-full h-full">
<BackgroundAnimation />
        </div>
    )
}