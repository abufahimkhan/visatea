import { Images } from "@/components/utils/image";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="text-teal-600">
      <Image
        src={Images.logo}
        alt="Logo"
        loading="lazy"
        className="relative bottom-4 w-24 lg:w-40 h-auto"
      />
    </div>
  );
};

export default Logo;
