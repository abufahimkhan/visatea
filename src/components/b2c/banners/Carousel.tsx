"use client";
import { Images } from "@/components/utils/image";
import { nanoid } from "nanoid";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const banners = [{ logo: Images.banner1 }, { logo: Images.banner2 }];

  return (
    <div className="slider-container overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={nanoid()} className="banner-wrapper">
            <Image
              src={banner.logo}
              alt="banners"
              layout="responsive"
              width={1600} // Adjust based on your banner width
              height={600} // Adjust based on your banner height
              objectFit="cover" // Makes the image cover the container, maintaining aspect ratio
              quality={100} // Ensures the image is high quality
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
