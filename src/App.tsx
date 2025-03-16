import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./App.css";
import BlobComponent from "./components/BlobComponent";
import NameComponent from "./components/NameComponent";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJava,
  FaLaptopCode,
  FaFigma,
  FaMobileAlt,
  FaDraftingCompass,
} from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { SiMiro } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { PiUserFocus } from "react-icons/pi";
import { FaDiamond } from "react-icons/fa6";
import GridItemComponent from "./components/GridItemComponent";
import GridComponent from "./components/GridComponent";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-bgblue font-display">
        <div className="w-screen h-32 bg-bgblue  border border-red-600 flex flex-row font-medium fixed top-0 left-0 z-50">
          <div className="border border-green-600 flex-grow text-white text-2xl flex justify-start items-center pt-4">
            <h3 className="pl-4">VIKTOR CARRICK</h3>
          </div>
          <div className="border border-green-400 flex-grow-0 grid grid-cols-3 gap-24 place-items-center text-white text-2xl pr-24 pt-4">
            <h3 className="">OM MIG</h3>
            <h3 className="">PORTFOLIO</h3>
            <h3 className="">KONTAKT</h3>
          </div>
        </div>
        {/** Blob section with name etc. */}
        <div className="h-[calc(100vh-8rem)] flex items-center justify-center mt-32">
          <div className=" flex justify-center z-10">
            <div className="flex  items-center">
              <BlobComponent
                width={533}
                height={550}
                className="relative z-20"
              ></BlobComponent>
            </div>
            <div className=" flex justify-center min-w-lg flex-col text-8xl font-medium text-white ml-2">
              <NameComponent></NameComponent>
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh-8rem)] flex flex-col items-center justify-start pt-12 bg-bgblue font-display border-2 border-cyan-400">
          <h3 className="text-5xl text-white font-medium">MINA PROJEKT</h3>
          <div className="w-full flex-grow flex flex-row items-center justify-between px-32">
            <div className=" relative flex flex-col items-center">
              <BlobComponent
                width={304}
                height={314}
                className="hover:motion-preset-seesaw-sm"
              />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-bgblue text-4xl font-medium">
                UX Design
              </span>
            </div>
            <div className=" relative flex flex-col items-center">
              <BlobComponent
                width={304}
                height={314}
                className="hover:motion-preset-seesaw-sm"
              />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-bgblue text-4xl font-medium">
                Webb
              </span>
            </div>
            <div className=" relative flex flex-col items-center">
              <BlobComponent
                width={304}
                height={314}
                className="hover:motion-preset-seesaw-sm"
              />
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-bgblue text-4xl font-medium">
                Mjukvara
              </span>
            </div>
          </div>
        </div>
        <div className="h-[calc(100vh-8rem)] flex flex-row items-center justify-between pt-12 bg-bgblue font-display border-2 border-green-400">
          <div className="border border-red-500 flex-grow flex flex-row">
            <BlobComponent width={304} height={314} className="" />
            <h3 className="text-5xl text-white font-medium">Lite om mig!</h3>
            <p className="text-white font-light text-3xl"></p>
          </div>
          <div className="border border-red-500 flex-grow">
            <h3 className="text-5xl text-white font-medium mb-2">Kunskaper</h3>
            <h3 className="text-3xl text-white font-medium mb-2">Frontend</h3>
            {/**GÖR OM KOMPONENTEN TILL EN RAD MED FLEX ISTÄLLET */}
            <GridComponent>
              <GridItemComponent icon={FaHtml5} text="HTML"></GridItemComponent>
              <GridItemComponent icon={FaCss3} text="CSS"></GridItemComponent>
              <GridItemComponent
                icon={RiTailwindCssFill}
                text="Tailwind CSS"
              ></GridItemComponent>
            </GridComponent>
            <GridComponent>
              <GridItemComponent
                icon={RiJavascriptFill}
                text="JavaScript"
              ></GridItemComponent>
              <GridItemComponent
                icon={BiLogoTypescript}
                text="TypeScript"
              ></GridItemComponent>
              <GridItemComponent
                icon={FaReact}
                text="React"
              ></GridItemComponent>
            </GridComponent>
            <h3 className="text-3xl text-white font-medium mb-2">Backend</h3>
            <GridComponent>
              <GridItemComponent
                icon={FaLaptopCode}
                text="C"
              ></GridItemComponent>
              <GridItemComponent
                icon={FaLaptopCode}
                text="C#"
              ></GridItemComponent>
              <GridItemComponent icon={FaJava} text="Java"></GridItemComponent>
              <GridItemComponent
                icon={BsFiletypeSql}
                text="SQL"
              ></GridItemComponent>
            </GridComponent>
            <GridComponent>
              <GridItemComponent
                icon={FaLaptopCode}
                text="ASP .NET CORE"
              ></GridItemComponent>
            </GridComponent>
            <h3 className="text-3xl text-white font-medium mb-2">UX Design</h3>
            <GridComponent>
              <GridItemComponent
                icon={PiUserFocus}
                text="Användartestning"
              ></GridItemComponent>
              <GridItemComponent
                icon={FaDiamond}
                text="Double Diamond"
              ></GridItemComponent>
            </GridComponent>
            <GridComponent>
              <GridItemComponent
                icon={FaDraftingCompass}
                text="Prototyping"
              ></GridItemComponent>
              <GridItemComponent
                icon={FaMobileAlt}
                text="Responsiv Design"
              ></GridItemComponent>
            </GridComponent>
            <GridComponent>
              <GridItemComponent
                icon={FaFigma}
                text="Figma"
              ></GridItemComponent>
              <GridItemComponent icon={SiMiro} text="Miro"></GridItemComponent>
              <GridItemComponent
                icon={FaMobileAlt}
                text="UI Design"
              ></GridItemComponent>
            </GridComponent>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
