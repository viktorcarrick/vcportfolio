interface GridComponentProps {
  children: React.ReactNode;
}

const GridComponent: React.FC<GridComponentProps> = ({ children }) => {
  return (
    <>
      <div className="border border-white grid grid-cols-[auto_auto_auto] grid-rows-2 gap-x-2 pr-4 pt-4 w-fit">
        {children}
      </div>
    </>
  );
};
export default GridComponent;
