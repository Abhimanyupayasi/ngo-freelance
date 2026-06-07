"use client";

import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";

export default function HopeSection() {
  return (
    <section className="bg-[#F6F6F4] overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-5xl md:text-7xl font-light text-zinc-700 leading-none">
              Empowering Change,
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-none mt-2">
              Inspiring H
              <span className="text-[#14C38E]">o</span>Pe
            </h2>

            <div className="w-20 h-1 bg-[#14C38E] mt-6" />
          </motion.div>

          {/* Scribble */}
          <div className="absolute right-0 top-0 hidden lg:block">
            <div className="w-[320px] h-[180px] border border-[#14C38E]/20 rounded-full" />
          </div>

          {/* Overlapping Images */}
          <div className="mt-16 flex justify-center">
            <div className="relative h-[420px] w-full max-w-5xl">
              {[
                "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
                "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
                "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
                "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="absolute top-0"
                  style={{
                    left: `${index * 18}%`,
                    width: "24%",
                    height: "100%",
                    zIndex: index,
                    clipPath:
                      "polygon(0 0,100% 0,100% 85%,50% 100%,0 85%)",
                  }}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover rounded-t-[40px]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* HOPE IN ACTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-28">
          <div className="relative h-[420px]">
            <div className="absolute inset-0 overflow-hidden rounded-[80px]">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-6 right-6 bg-[#14C38E] text-white h-16 w-16 rounded-full flex items-center justify-center">
              <ArrowUpRightIcon className="h-8 w-8" />
            </div>
          </div>

          <div>
            <p className="text-[#14C38E] font-semibold uppercase tracking-widest">
              Hope In Action
            </p>

            <h3 className="text-5xl font-black mt-4">
              One World,
              <br />
              One Mission
            </h3>

            <p className="mt-6 text-zinc-600 leading-relaxed">
              We believe every individual has the power to create lasting
              change. Through environmental action, education, and community
              development programs, we help transform lives while building a
              greener and more sustainable future.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-28">
          <div className="bg-[#F2CD00] rounded-[50px] p-10 text-white">
            <h4 className="text-5xl font-black">500+</h4>
            <p className="mt-2 font-medium">Volunteers Worldwide</p>
          </div>

          <div className="relative h-[220px] rounded-[50px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-[#F2CD00] rounded-[50px] p-10 text-white">
            <h4 className="text-5xl font-black">200+</h4>
            <p className="mt-2 font-medium">Community Projects</p>
          </div>

          <div className="bg-[#14C38E] rounded-[50px] p-10 text-white">
            <h4 className="text-5xl font-black">100K+</h4>
            <p className="mt-2 font-medium">Trees Planted</p>
          </div>

          <div className="bg-[#14C38E] rounded-[50px] p-10 text-white">
            <h4 className="text-5xl font-black">300+</h4>
            <p className="mt-2 font-medium">Educational Programs</p>
          </div>

          <div className="relative h-[220px] rounded-[50px] overflow-hidden lg:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=1200&q=80"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}