import Carousel from "@/components/b2c/banners/Carousel";
import Divider from "@/components/b2c/common/Divider";
import ContactUs from "@/components/b2c/contact-us/ContactUs";
import Footer from "@/components/b2c/footer/Footer";
import { SearchEngine } from "@/components/b2c/search-engine/SearchEngine";
import Services from "@/components/b2c/services/Services";

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <Divider title="Visa Tea is Here To help You" />
      <SearchEngine />
      <Services />
      <Divider title="Contact for your Scope" />
      <ContactUs />
      <Footer />
    </div>
  );
}
