"use client";
import { Images } from "@/components/utils/image";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

const Destination = () => {
  const CardImages = [
    {
      src: Images.cardImage1,
      alt: "Image of a landscape",
      href: "/",
      title: "Australia",
    },
    {
      src: Images.cardImage2,
      alt: "Image of a city",
      href: "/",
      title: "Canada",
    },
    {
      src: Images.cardImage3,
      alt: "Image of a beach",
      href: "/",
      title: "Ireland",
    },
    {
      src: Images.cardImage4,
      alt: "Image of mountains",
      href: "/",
      title: "New Zealand",
    },
    {
      src: Images.cardImage5,
      alt: "Image of a forest",
      href: "/",
      title: "United Kingdom",
    },
    {
      src: Images.cardImage6,
      alt: "Image of a sunset",
      href: "/",
      title: "United States",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-center justify-center px-5 py-12">
      {CardImages.map((content) => (
        <motion.div
          key={nanoid()}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <Link href={content.href}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <h1 className="relative max-w-fit p-2 text-center rounded-lg top-12 left-3 text-white text-sm font-bold bg-black">
                {content.title}
              </h1>
              <Image
                src={content.src}
                alt={content.alt}
                loading="lazy"
                className="object-cover w-full h-full  rounded-lg"
              />
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Destination;
