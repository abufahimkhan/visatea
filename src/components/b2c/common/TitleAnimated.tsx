"use client";
import { TypeAnimation } from "react-type-animation";

interface PropTypes {
  title: string;
  title2?: string;
  title3?: string;
  title4?: string;
  title5?: string;
}

const TitleAnimated: React.FC<PropTypes> = ({
  title,
  title2,
  title3,
  title4,
  title5,
}) => {
  // Creating a sequence array and conditionally push titles if they exist
  const sequence = [500, title, 400];

  // Additional titles if they are provided
  if (title2) {
    sequence.push(title2, 500);
  }
  if (title3) {
    sequence.push(title3, 400);
  }
  if (title4) {
    sequence.push(title4, 400);
  }
  if (title5) {
    sequence.push(title5, 400);
  }

  return (
    <div className="flex justify-center mt-10">
      <TypeAnimation
        preRenderFirstString={true}
        sequence={sequence}
        speed={10}
        className="text-gray-800 font-bold text-md lg:text-2xl"
        style={
          {
            // fontFamily: "serif",
          }
        }
        repeat={Infinity}
      />
    </div>
  );
};

export default TitleAnimated;
