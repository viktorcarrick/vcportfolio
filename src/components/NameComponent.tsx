import { TypeAnimation } from "react-type-animation";
const NameComponent = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          "VIKTOR\nCARRICK", // Types 'One'
          2000, // Waits 1s
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={false}
        repeat={1}
        speed={40}
        style={{
          display: "inline-block",
          whiteSpace: "pre-line",
        }}
      />
      <h3 className="text-3xl font-light mt-2">
        <TypeAnimation
          sequence={[2000, "Interaktionsdesigner med passion för UX och kod!"]}
          speed={40}
          wrapper="span"
          cursor={true}
          repeat={1}
          style={{
            fontSize: "text-3xl", // Smaller font size for this line
            display: "inline-block",
          }}
        />
      </h3>
    </>
  );
};

export default NameComponent;
