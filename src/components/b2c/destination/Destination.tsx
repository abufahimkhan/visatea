"use client";
import { CardData } from "@/components/utils/data/CardData";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

const Destination = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-center justify-center px-5 py-12">
      {CardData.map((content) => (
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
                <span className="absolute p-2 text-center rounded-lg top-2 left-3 text-white text-sm font-bold bg-black">
                  {content.title}
                </span>

                <span className="absolute inset-0 flex items-center justify-center text-center p-5 rounded-lg bg-slate-500 bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  {content.description}
                </span>

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
