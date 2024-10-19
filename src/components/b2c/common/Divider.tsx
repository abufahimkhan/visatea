interface PropTypes {
  title?: string;
}
const Divider: React.FC<PropTypes> = ({ title }) => {
  return (
    <div className="flex items-center justify-center mt-5 py-5">
      <span className="flex items-center justify-center w-full max-w-[200px]">
        <span className="h-px mr-5 flex-1 bg-gray-300"></span>
        <span className="shrink-0 px-6 font-bold text-gray-800 uppercase text-md lg:text-2xl">
          {title}
        </span>
        <span className="h-px ml-5 flex-1 bg-gray-300"></span>
      </span>
    </div>
  );
};

export default Divider;
