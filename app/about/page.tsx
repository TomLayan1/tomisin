"use client"

import About from "../components/About";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Resume from "../components/Resume";

export default function Home() {

  return (
    <div className="bg-[#1c1b1b] min-h-screen">
      <Header />
      <AboutHero />
      <About />
      <Resume />
      <Footer />
    </div>
  );
}
