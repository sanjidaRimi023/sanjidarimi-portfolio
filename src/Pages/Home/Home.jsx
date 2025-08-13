import React from "react";
import HeroSection from "../../Components/Customs/HeroSection";
import About from "../../Components/Customs/About";
// import Daynamic_Projects from '../../Components/Customs/Dynamic_Projects'
// import Dynamic_MySkills from '../../Components/Customs/Dynamic_MySkills'
import Tool from "../../Components/Customs/Tool";
import MySkills from "../../Components/Customs/MySkills";
import Projects from "../../Components/Customs/Projects";

import ContactForm, { ContactInfo } from "../../Components/Customs/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <MySkills />
          {/* <Dynamic_MySkills /> */}
      <Tool />
    

      {/* <Daynamic_Projects /> */}
      <Projects />
      <div className="flex gap-8 flex-col lg:flex-row container mx-auto">
        <ContactInfo/>
      <ContactForm />
      </div>
      

    
    </>
  );
}
