"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function ImpactSection() {
  return (
    <section className="bg-[#F8F6F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-[#FF6A1C] text-xs font-bold uppercase tracking-[0.2em]">
              OUR MISSION
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-[0.95]">
              Building a
              <br />
              Better Future
              <br />
              Together.
            </h1>

            <p className="mt-8 text-zinc-600 max-w-lg leading-relaxed">
              Every donation, every volunteer, and every act of kindness
              contributes to stronger communities and brighter futures.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-black text-white px-8 py-4 rounded-full">
                Donate Now
              </button>

              <button className="border border-zinc-300 px-8 py-4 rounded-full">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-[40px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-6 right-6 bg-white rounded-3xl p-6 shadow-xl">
              <p className="text-5xl font-black text-[#FF6A1C]">288</p>
              <p className="text-sm text-zinc-600 mt-2">
                Children supported
                <br />
                this year
              </p>
            </div>
          </motion.div>
        </div>

        {/* FEATURES */}
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {[
            "Healthy Food",
            "Education",
            "Clean Water",
            "Medical Aid",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-6 border border-zinc-200"
            >
              <div className="h-12 w-12 rounded-2xl bg-[#FFF1E8]" />
              <h3 className="mt-4 font-bold">{item}</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Supporting communities with sustainable initiatives.
              </p>
            </div>
          ))}
        </div> */}

        {/* COLLAGE + CONTENT */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mt-28">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[250px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?q=80&w=800"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[250px] rounded-3xl overflow-hidden mt-10">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[250px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=800"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[250px] rounded-3xl overflow-hidden mt-10">
              <Image
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-[#FF6A1C] text-xs font-bold uppercase tracking-[0.2em]">
              OUR IMPACT
            </span>

            <h2 className="mt-5 text-5xl font-black leading-tight">
              What have
              <br />
              we done with
              <br />
              your help?
            </h2>

            <p className="mt-8 text-zinc-600 leading-relaxed">
              Through collective support and community action, we have
              delivered education, nourishment, healthcare, and hope to
              thousands of families.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="border border-zinc-300 px-8 py-4 rounded-full">
                About Us
              </button>

              <button className="bg-black text-white px-8 py-4 rounded-full">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}