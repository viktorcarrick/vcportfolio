import React from "react";

interface GridItemComponentProps {
  icon: React.ElementType; // This allows passing any valid React component
  text: string;
}

const GridItemComponent: React.FC<GridItemComponentProps> = ({
  icon: Icon,
  text,
}) => {
  return (
    <>
      <div className="bg-white p-4 text-2xl text-bgblue flex flex-row items-center justify-start shadow-md h-3/4">
        <Icon className="w-7 h-7 mr-2" />
        <p>{text}</p>
      </div>
    </>
  );
};
export default GridItemComponent;
