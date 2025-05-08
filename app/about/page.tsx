"use client"

import About from "../components/About";
import AboutHero from "../components/AboutHero";
import Resume from "../components/Resume";

export default function Home() {

  return (
    <div className="bg-black min-h-screen">
      <AboutHero />
      <About />
      <Resume />
    </div>
  );
}
