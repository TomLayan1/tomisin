"use client"

import { useEffect, useState } from "react";
import Header from "./components/Header";

export default function Home() {
    const [onComplete, setOnComplete] = useState<boolean>(true);

    const handleIntro = () => {
      setOnComplete(false);
    }

    useEffect(() => {
      const timer = setInterval(handleIntro, 6000);
      return () => clearTimeout(timer);
    }, [handleIntro])
  
  return (
    <>
      {onComplete ?
        (<div className="w-full h-screen container mx-auto flex items-baseline-last justify-center">
          <div className="flex items-center justify-center gap-5">
            <p className="text-[240px] font-bold">T</p>
            <p className="text-[240px] font-bold">O</p>
            <p className="text-[240px] font-bold">M</p>
            <p className="text-[240px] font-bold">I</p>
            <p className="text-[240px] font-bold">S</p>
            <p className="text-[240px] font-bold">I</p>
            <p className="text-[240px] font-bold">N</p>
          </div>
      </div>) 
      :
      (<main>
        <Header />
      </main>)}
    </>
  );
}
