import React from "react";

interface CardComponentProps {
  title: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title }) => {
  return (
    <>
      <div className="bg-white h-80 w-80 rounded-2xl shadow-[-15px_15px_0px_black] flex flex-col justify-center items-center p-6 motion-preset-pop">
        <h3 className="text-black font-medium text-4xl mb-2 text-left w-full">
          {title}
        </h3>
        <div className="border-2 border-black w-full grow">Bild</div>
      </div>
    </>
  );
};
export default CardComponent;
