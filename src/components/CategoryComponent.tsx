import React from "react";
import BlobComponent from "./BlobComponent";
interface CategoryComponentProps {
  text: string;
  onClick: () => void;
}

const CategoryComponent: React.FC<CategoryComponentProps> = ({
  text,
  onClick,
}) => {
  console.log(`Rendering CategoryComponent: ${text}`);
  return (
    <>
      <div className=" relative flex flex-col items-center">
        <BlobComponent
          width={304}
          height={314}
          className="hover:motion-preset-seesaw-sm"
        />
        <span
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-bgblue text-4xl font-medium cursor-pointer"
          onClick={onClick}
        >
          {text}
        </span>
      </div>
    </>
  );
};
export default CategoryComponent;
