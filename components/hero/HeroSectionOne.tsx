"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function HeroSectionOne() {
  return (
    <section className="bg-[#F7F5F1]">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative h-[70vh] md:h-[85vh] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000"
            alt="Community"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: .3, duration: .8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center text-white">
              <h2 className="font-black uppercase text-4xl md:text-7xl">
                Equal Rights
              </h2>

              <h3 className="font-black uppercase text-3xl md:text-6xl text-[#FF7440]">
                Child Protection
              </h3>

              <h3 className="font-black uppercase text-3xl md:text-6xl">
                Save Planet
              </h3>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}