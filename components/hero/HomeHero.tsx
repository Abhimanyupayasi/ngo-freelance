"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const stories = [
  {
    category: "FOUNDATION UPDATES",
    title: "We amplify the voices of people the world too often ignores.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400",
  },
  {
    category: "EDUCATION ACCESS",
    title: "A mobile classroom reaches its 100th child in post-conflict areas.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
  {
    category: "CLIMATE & JUSTICE",
    title: "Youth activists transform drought stories into policy action.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },
];

export default function HomeHero() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative flex justify-center"
      >
        <div className="relative">
          <div
            className="
              text-[80px]
              sm:text-[120px]
              md:text-[170px]
              lg:text-[240px]
              font-black
              uppercase
              leading-[0.82]
              tracking-[-4px]
              md:tracking-[-10px]
              text-transparent
              bg-clip-text
              select-none
            "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>VOICES</div>
            <div>UNITED</div>
          </div>

          <div className="absolute inset-0 -z-10 overflow-hidden rounded-[40px]">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200"
              alt=""
              fill
              className="object-cover opacity-20"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mt-10"
      >
        <button className="bg-[#FF6A1C] text-white px-12 py-4 rounded-full font-semibold hover:scale-105 transition">
          DONATE
        </button>

        <button className="border border-zinc-400 px-12 py-4 rounded-full font-semibold hover:bg-white">
          TELL MY STORY
        </button>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 mt-28 pb-20">
        {stories.map((story, index) => (
          <motion.article
            key={story.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
            className="group"
          >
            <div className="flex items-start gap-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="text-[#FF6A1C] text-[11px] font-bold uppercase tracking-wider">
                  {story.category}
                </p>

                <h3 className="mt-1 text-sm font-semibold text-zinc-800 leading-relaxed">
                  {story.title}
                </h3>
              </div>

              <div className="h-8 w-8 rounded-full border border-zinc-300 flex items-center justify-center group-hover:bg-[#FF6A1C] group-hover:text-white transition">
                <ArrowUpRightIcon className="h-4 w-4" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}