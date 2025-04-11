import React, { useState } from "react";
import CardComponent from "./CardComponent";
import type { Card } from "/Users/viktorcarrick/Documents/GitHub/vcportfolio/src/types/Card.tsx";
interface CardListProps {
  card1: Card;
  card2: Card;
  card3: Card;
}
const CardList: React.FC<CardListProps> = ({ card1, card2, card3 }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const cards = [card1, card2, card3];
  const selectedCardData = cards.find((card) => card.title === selectedCard);
  console.log("Card 1 desc:", card1.description);
  console.log("Card 2 imagepath:", card2.imagePath);
  console.log("Card 3:", card3);

  return (
    <div className="flex flex-row justify-evenly w-full mb-16 mt-16">
      {selectedCard ? (
        <CardComponent
          key={selectedCard}
          title={selectedCard}
          description={selectedCardData?.description || ""}
          imagePath={selectedCardData?.imagePath || "no img found"}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      ) : (
        cards.map(({ title, description, imagePath }) => (
          <CardComponent
            key={title}
            title={title}
            description={description}
            imagePath={imagePath}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        ))
      )}
    </div>
  );
};

export default CardList;
