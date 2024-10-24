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
      description:
        "Uncover a world of opportunities in Australia, offering world-class education and a high quality of life.",
    },
    {
      src: Images.cardImage2,
      alt: "Image of a city",
      href: "/",
      title: "Canada",
      description:
        "Canada offers a wide range of institutions and diverse opportunities for students across the globe.",
    },
    {
      src: Images.cardImage3,
      alt: "Image of a beach",
      href: "/",
      title: "Ireland",
      description:
        "Ireland is a beautiful and dynamic country with some of the world’s best universities.",
    },
    {
      src: Images.cardImage4,
      alt: "Image of mountains",
      href: "/",
      title: "New Zealand",
      description:
        "New Zealand’s strong education system and high quality of life make it an ideal place to study.",
    },
    {
      src: Images.cardImage5,
      alt: "Image of a forest",
      href: "/",
      title: "United Kingdom",
      description:
        "The UK is home to some of the world's leading universities and offers a multicultural environment.",
    },
    {
      src: Images.cardImage6,
      alt: "Image of a sunset",
      href: "/",
      title: "United States",
      description:
        "The United States is known for its vast array of universities and institutions, offering top-tier education.",
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
          className="relative group" // for hover effects
        >
          <Link href={content.href}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="w-full h-full relative">
                {/* Title */}
                <span className="absolute p-2 text-center rounded-lg top-2 left-3 text-white text-sm font-bold bg-black">
                  {content.title}
                </span>

                {/* Description, revealed on hover */}
                <span className="absolute inset-0 flex items-center justify-center text-center p-5 rounded-lg bg-slate-500 bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  {content.description}
                </span>

                {/* Image */}
                <Image
                  src={content.src}
                  alt={content.alt}
                  loading="lazy"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Destination;
