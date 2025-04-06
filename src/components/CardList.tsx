import React, { useState } from "react";
import CardComponent from "./CardComponent";
interface CardListProps {
  title1: string;
  title2: string;
  title3: string;
}
const CardList: React.FC<CardListProps> = ({ title1, title2, title3 }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const cards = [title1, title2, title3];

  return (
    <div className="flex flex-row justify-evenly w-full mb-16 mt-16">
      {selectedCard ? (
        <CardComponent
          key={selectedCard}
          title={selectedCard}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      ) : (
        cards.map((title) => (
          <CardComponent
            key={title}
            title={title}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        ))
      )}
    </div>
  );
};

export default CardList;
