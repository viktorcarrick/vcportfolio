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
        isSelected ? "w-3/4 h-100" : "w-80 h-80"
      } bg-white rounded-2xl shadow-[-15px_15px_0px_black] flex flex-col justify-center items-center p-6 motion-preset-pop cursor-pointer transition-all duration-500 ease-in-out`}
      onClick={() => setSelectedCard(isSelected ? null : title)}
    >
      <h3 className="text-black font-medium text-4xl mb-2 text-left w-full">
        {title}
      </h3>
      <div className="border-2 border-black w-full grow">Bild</div>
    </div>
  );
};

export default CardComponent;
