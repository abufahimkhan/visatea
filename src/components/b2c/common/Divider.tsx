import React from "react";

interface PropTypes {
  title: string;
}
const Divider: React.FC<PropTypes> = ({ title }) => {
  return (
    <div className="flex items-center justify-center h-5 mt-12 py-5">
      <span className="flex items-center justify-center w-full max-w-[600px]">
        <span className="h-px flex-1 bg-black"></span>
        <span className="shrink-0 px-6 font-bold text-violet-400 uppercase text-lg">
          {title}
        </span>
        <span className="h-px flex-1 bg-black"></span>
      </span>
    </div>
  );
};

export default Divider;
