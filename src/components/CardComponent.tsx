import React from "react";

interface CardComponentProps {
  title: string;
  selectedCard: string | null;
  setSelectedCard: (card: string | null) => void;
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  selectedCard,
  setSelectedCard,
}) => {
  const isSelected = selectedCard === title;
  /**TODO: fixa animationen, ser inge bra ut atm */
  return (
    <div
      className={`${
        isSelected ? "w-3/4 h-120" : "w-80 h-80"
      } bg-white rounded-2xl shadow-[-15px_15px_0px_black] flex flex-col justify-center items-center p-6 motion-preset-pop cursor-pointer transition-all duration-500 ease-in-out`}
      onClick={() => setSelectedCard(isSelected ? null : title)}
    >
      <h3 className="text-black font-medium text-4xl mb-2 text-left w-full">
        {title}
      </h3>
      <div className="border-2 border-black w-full grow flex">


      <div  className={`transition-all overflow-hidden ease-in-out flex flex-row ${
        isSelected ? "opacity-100 duration-800 max-h-[500px]" : "opacity-0 duration-0 max-h-0"
      }`}>
      <div className="w-1/4 text-black text-xl">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="border-2 border-pink-500 grow p-5 flex gap-5 items-center justify-center">
          <div className="text-black grow border-2">Bild</div>
          <div className="text-black grow border-2">Bild</div>
          <div className="text-black grow border-2">Bild</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardComponent;
