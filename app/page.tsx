"use client"

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Processes from "./components/Processes";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  const [onComplete, setOnComplete] = useState<boolean>(true);

  const handleIntro = () => {
    setOnComplete(false);
  };

  useEffect(() => {
    const timer = setInterval(handleIntro, 8000);
    return () => clearTimeout(timer);
  }, [handleIntro]);
  
  return (
    <>
      {onComplete ?
        (<Intro />) 
      :
        (<main className="bg-[#1c1b1b] min-h-screen">
        <Header />
        <Hero />
        <Projects />
        <Services />
        <Processes />
        <Footer />
      </main>)}
    </>
  );
}
