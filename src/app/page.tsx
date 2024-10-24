import Carousel from "@/components/b2c/banners/Carousel";
import Divider from "@/components/common/Divider";
import TitleAnimated from "@/components/common/TitleAnimated";
import ContactUs from "@/components/b2c/contact-us/ContactUs";
import Destination from "@/components/b2c/destination/Destination";
import Footer from "@/components/b2c/footer/Footer";
import { SearchEngine } from "@/components/b2c/search-engine/SearchEngine";
import Services from "@/components/b2c/services/Services";

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <TitleAnimated title="Search For Courses" />
      <SearchEngine />
      <Divider />
      <Services />
      <TitleAnimated title="Contact for your Scope" />
      <ContactUs />
      <TitleAnimated title="Six dream destinations" />
      <Destination />
      <Footer />
    </div>
  );
}
