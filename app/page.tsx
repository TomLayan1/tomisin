"use client"

import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Processes from "./components/Processes";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

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
        <About />
        <Experience />
        <Projects />
        <Processes />
        <Footer />
      </main>)}
    </>
  );
}
