"use client";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import React from "react";

interface PropTypes {
  title: string;
}

const TitleAnimated: React.FC<PropTypes> = ({ title }) => {
  const allTitles = [title].filter(Boolean);
  const words = allTitles.join(" ").split(" ");

  return (
    <div className="flex justify-center mt-10">
      <div className="text-sky-500 font-bold text-md lg:text-3xl">
        {words.map((word, i) => (
          <motion.span
            key={nanoid()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.2,
            }}
            className="mr-1"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default TitleAnimated;
