"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function AboutHero() {
  return (
    <section className="bg-[#FAF8F5] pt-8">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            min-h-[750px]
            bg-white
            shadow-sm
          "
        >
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000"
            alt="Children"
            fill
            priority
            className="object-cover"
          />

          {/* White Overlay */}
          <div className="absolute inset-0 bg-white/55" />

          {/* Content */}
          <div className="relative z-10 h-full">
            <div className="grid lg:grid-cols-2 min-h-[750px]">
              {/* Left Content */}
              <div className="flex items-center px-8 lg:px-20">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-xl"
                >
                  <span className="uppercase text-[#FF7440] font-semibold tracking-[0.2em]">
                    About Us
                  </span>

                  <h1
                    className="
                    mt-5
                    text-5xl
                    md:text-7xl
                    font-black
                    uppercase
                    leading-[0.9]
                    text-[#2563A9]
                  "
                  >
                    Building A
                    <br />
                    Strong
                    <br />
                    Future
                  </h1>

                  <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
                    We empower communities through education,
                    advocacy and storytelling. Together we create
                    opportunities that help children, families and
                    communities thrive.
                  </p>

                  <button
                    className="
                    mt-8
                    bg-[#FF7440]
                    text-white
                    px-8
                    py-4
                    rounded-full
                    font-semibold
                    hover:scale-105
                    transition
                    "
                  >
                    Learn More
                  </button>
                </motion.div>
              </div>

              {/* Right Empty Space */}
              <div />
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="
              absolute
              top-8
              left-1/2
              -translate-x-1/2
              z-20
            "
          >
            
          </motion.div>

          {/* Curved SVG Bottom */}
          <div className="absolute bottom-0 left-0 w-full z-10">
            <svg
              viewBox="0 0 1440 220"
              className="w-full"
              preserveAspectRatio="none"
            >
              <path
                d="
                M0,120
                C250,40
                500,180
                720,120
                C980,40
                1180,180
                1440,80
                L1440,220
                L0,220
                Z
                "
                fill="#FAF8F5"
              />

              <path
                d="
                M0,120
                C250,40
                500,180
                720,120
                C980,40
                1180,180
                1440,80
                "
                fill="none"
                stroke="#FF5B8A"
                strokeWidth="4"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}