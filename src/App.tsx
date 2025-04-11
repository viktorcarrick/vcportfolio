import { useEffect, useRef, useState } from "react";
import "./App.css";
import BlobComponent from "./components/BlobComponent";
import NameComponent from "./components/NameComponent";
import CategoryComponent from "./components/CategoryComponent";
import GridItemComponent from "./components/GridItemComponent";
import GridComponent from "./components/GridComponent";
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
import CardList from "./components/CardList";
{
  /**Kika in GSap, schyssta animationer för javascript */
}
function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleClick = (category: string) => {
    console.log(`Clicked: ${category}`);
    setSelectedCategory(category); // Trigger re-render
  };
  return (
    <>
      <div className="h-screen w-max-screen bg-bgblue font-display">
        <div className="w-screen h-32 bg-bgblue  flex flex-row font-medium fixed top-0 left-0 z-50">
          <div className="flex-grow text-white text-2xl flex justify-start items-center pt-4">
            <h3 className="pl-4">VIKTOR CARRICK</h3>
          </div>
          <div className=" flex-grow-0 grid grid-cols-3 gap-24 place-items-center text-white text-2xl pr-24 pt-4">
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
        <div className="h-[calc(100vh-8rem)] flex flex-col items-center justify-center pt-12 bg-bgblue font-display">
          {(selectedCategory === null || selectedCategory === "") && (
            <>
              <h3 className="text-5xl text-white font-medium">MINA PROJEKT</h3>
              <div className="w-full flex-grow flex flex-row items-center justify-between px-32 motion-preset-shrink">
                <CategoryComponent
                  text="UX Design"
                  onClick={() => handleClick("UX Design")}
                />
                <CategoryComponent
                  text="Webb"
                  onClick={() => handleClick("Webb")}
                />
                <CategoryComponent
                  text="Mjukvara"
                  onClick={() => handleClick("Mjukvara")}
                />
              </div>
            </>
          )}
          {/* Conditionally Render Content, TODO:centrera korten, dom är ej i mitten vertikalt*/}
          {selectedCategory === "UX Design" && (
            <>
              <h3 className="text-5xl text-white font-medium">UX Design</h3>
              <CardList
                card1={{
                  title: "Routeplanner",
                  description:
                    "Gränssnitt för navigering och laddning av elbilar, designat med Figma",
                  imagePath: "src/images/routeplanner-mobilez.png",
                }}
                card2={{
                  title: "Titel 2",
                  description: "Beskrivning 123 här är lite mer",
                  imagePath: "",
                }}
                card3={{
                  title: "Titel 3",
                  description: "Beskrivning 123 här är lite mer och änny mer",
                  imagePath: "",
                }}
              ></CardList>
              <button onClick={() => handleClick("")}>Tillbaka</button>
            </>
          )}
          {selectedCategory === "Webb" && (
            <>
              <h3 className="text-5xl text-white font-medium">
                Webbutveckling
              </h3>
              <CardList
                card1={{
                  title: "Fiskeproggen",
                  description:
                    "Webbapp för att planera sitt fiske efter väder! Byggd med React och Tailwind CSS",
                  imagePath: "src/images/mockup_fiskeproggen.png",
                }}
                card2={{
                  title: "Titel 2",
                  description: "Beskrivning 123 här är lite mer",
                  imagePath: "",
                }}
                card3={{
                  title: "Titel 3",
                  description: "Beskrivning 123 här är lite mer och änny mer",
                  imagePath: "",
                }}
              ></CardList>
              <button onClick={() => handleClick("")}>Tillbaka</button>
            </>
          )}
          {selectedCategory === "Mjukvara" && (
            <>
              <h3 className="text-5xl text-white font-medium">Mjukvara</h3>
              <CardList
                card1={{
                  title: "Titel 1",
                  description: "Beskrivning 123",
                  imagePath: "",
                }}
                card2={{
                  title: "Titel 2",
                  description: "Beskrivning 123 här är lite mer",
                  imagePath: "",
                }}
                card3={{
                  title: "Titel 3",
                  description: "Beskrivning 123 här är lite mer och änny mer",
                  imagePath: "",
                }}
              ></CardList>
              <button onClick={() => handleClick("")}>Tillbaka</button>
            </>
          )}
        </div>
        <div className="h-[calc(100vh-8rem)] flex flex-row items-start justify-between gap-x-20 pt-12 bg-bgblue font-display  p-8">
          <div className="border border-red-500 flex-grow flex flex-row mt-12">
            <BlobComponent width={304} height={314} className="" />
            <div className=" ml-4 justify-center flex flex-col w-3/4">
              <h3 className="text-5xl text-white font-medium mb-2">
                Lite om mig!
              </h3>
              <p className="text-white font-light text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris. Vivamus hendrerit arcu sed erat molestie
                vehiculare. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                molestie vehiculare.
              </p>
            </div>
          </div>
          <div className="border border-red-500 flex-grow mt-12">
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
        <footer className="w-full min-h-[80px] bg-footerblue text-white flex justify-center items-center">
          © 2025 Viktor Carrick
        </footer>
      </div>
    </>
  );
}

export default App;
