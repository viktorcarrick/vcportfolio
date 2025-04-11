import React from "react";

interface CardComponentProps {
  title: string;
  selectedCard: string | null;
  description: string;
  imagePath: string;
  setSelectedCard: (card: string | null) => void;
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  selectedCard,
  description,
  imagePath,
  setSelectedCard,
}) => {
  const isSelected = selectedCard === title;
  console.log("Selected card: " + title + " " + isSelected);
  console.log(
    "CardComponent props, Title: " + title,
    " Desc: " + description,
    "Image path: " + imagePath
  );
  return (
    <div
      className={`${
        isSelected ? "w-3/4 h-120 p-12 " : "w-80 h-80 p-6"
      } bg-white rounded-2xl shadow-[-15px_15px_0px_black] flex flex-col justify-center items-center motion-preset-pop cursor-pointer transition-all duration-500 ease-in-out`}
      onClick={() => setSelectedCard(isSelected ? null : title)}
    >
      {/* Title */}
      <h3 className="text-black font-medium text-4xl mb-2 text-left w-full">
        {title}
      </h3>
      {/* Body */}
      {!isSelected ? (
        // Just image when collapsed
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={imagePath}
            className="max-w-full max-h-full object-contain transition-all duration-500 ease-in-out"
            alt="Card image"
          />
        </div>
      ) : (
        // Expanded view with description and image side-by-side
        <div className="flex flex-row gap-6 w-full h-full">
          <div className="w-1/2 text-black text-lg overflow-auto transition-all duration-500 ease-in-out">
            <p>{description}</p>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center transition-all duration-500 ease-in-out">
            <img
              src={imagePath}
              className="max-w-full max-h-full object-contain border border-amber-400 transition-all duration-500 ease-in-out"
              alt="Card image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
