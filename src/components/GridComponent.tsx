interface GridComponentProps {
  children: React.ReactNode;
}

const GridComponent: React.FC<GridComponentProps> = ({ children }) => {
  return (
    <>
      {/**border border-white grid grid-cols-[auto_auto_auto] grid-rows-2 gap-x-2 pr-4 pt-4 w-fit */}
      <div className="border border-white flex flex-row  w-4/6 justify-between mb-2">
        {children}
      </div>
    </>
  );
};
export default GridComponent;
