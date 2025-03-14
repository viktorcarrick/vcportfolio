interface GridComponentProps {
  children: React.ReactNode;
}

const GridComponent: React.FC<GridComponentProps> = ({ children }) => {
  return (
    <>
      {/**border border-white grid grid-cols-[auto_auto_auto] grid-rows-2 gap-x-2 pr-4 pt-4 w-fit */}
      <div className="flex flex-row justify-start gap-x-2 mb-2 w-md">
        {children}
      </div>
    </>
  );
};
export default GridComponent;
