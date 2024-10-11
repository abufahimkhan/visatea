import Carousel from "@/components/b2c/banners/Carousel";
import Divider from "@/components/b2c/common/Divider";
import { SearchEngine } from "@/components/b2c/search-engine/SearchEngine";
import Services from "@/components/b2c/services/Services";

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <SearchEngine />
      <Divider />
      <Services />
    </div>
  );
}
