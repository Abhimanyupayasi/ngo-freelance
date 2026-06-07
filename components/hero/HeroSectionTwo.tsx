"use client";

import Image from "next/image";
import { motion } from "motion/react";

const people = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=600",
];

export default function HeroSectionTwo() {
  return (
    <section className="bg-[#F7F5F1] py-24">
      <div className="max-w-[1400px] mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase">
            Here Our{" "}
            <span className="text-[#FF7440]">
              Stories
            </span>
          </h2>

          <p className="max-w-xl mx-auto mt-6 text-zinc-600">
            Real voices from the front lines of change.
            These are the people shaping their communities.
          </p>
        </motion.div>

        {/* Portrait Strip */}
        <div className="flex items-center justify-center gap-2 md:gap-3 overflow-x-auto">
          {people.map((img, index) => (
            <motion.div
              key={index}
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                width: 220,
              }}
              className="
                relative
                h-[320px]
                w-[55px]
                md:w-[70px]
                rounded-full
                overflow-hidden
                shrink-0
                cursor-pointer
                transition-all
                duration-500
              "
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>
          ))}

          {/* Featured Story Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              relative
              w-[450px]
              h-[320px]
              rounded-[30px]
              overflow-hidden
              shrink-0
              ml-4
            "
          >
            <Image
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600"
              alt=""
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute bottom-0 p-8 text-white">
              <h3 className="font-bold text-2xl">
                Amina and Leila
              </h3>

              <p className="mt-3 text-sm leading-relaxed max-w-sm">
                Sisters in Uganda brought more than meals —
                they brought dignity, hope and daily food
                to dozens of families.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-4 mt-16"
        >
          <button className="bg-[#FF7440] text-white px-10 py-4 rounded-full font-semibold uppercase">
            Tell My Story
          </button>

          <button className="border border-zinc-300 px-10 py-4 rounded-full font-semibold uppercase">
            See All Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
}