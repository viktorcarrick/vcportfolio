import React from "react";

interface LinkIconComponent {
  icon: React.ElementType; // This allows passing any valid React component
  onClick: () => void;
}

const LinkIconComponent: React.FC<LinkIconComponent> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <>
      <Icon
        onClick={onClick}
        color={"white"}
        className="h-10 w-10 cursor-pointer"
      />
    </>
  );
};
export default LinkIconComponent;
