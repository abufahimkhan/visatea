import Carousel from "@/components/b2c/banners/Carousel";
import Divider from "@/components/b2c/common/Divider";
import TitleAnimated from "@/components/b2c/common/TitleAnimated";
import ContactUs from "@/components/b2c/contact-us/ContactUs";
import Destination from "@/components/b2c/destination/Destination";
import Footer from "@/components/b2c/footer/Footer";
import { SearchEngine } from "@/components/b2c/search-engine/SearchEngine";
import Services from "@/components/b2c/services/Services";

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <TitleAnimated
        title="Search For Courses"
        title2="Search For Scholarships"
        title3="Search For Universities"
        title4="Search For Events"
        title5="Search For Road-Map"
      />
      <SearchEngine />
      <Divider />
      <Services />
      <Divider title="Contact for your Scope" />
      <ContactUs />
      <Destination />
      <Footer />
    </div>
  );
}
