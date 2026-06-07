"use client";

import Image from "next/image";
import { motion } from "motion/react";

const programs = [
  {
    category: "MATERNAL CARE",
    title: "Healthy Mothers, Healthy Future",
    description:
      "Extend support in the final leg distribution of sufficient nourishment to expectant and nursing mothers.",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
  },
  {
    category: "FOOD DISTRIBUTION",
    title: "Feeding Hope, One Plate at a Time",
    description:
      "Empowering communities through food distribution, we share sustenance and hope.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd59a93c6138?w=800&q=80",
  },
  {
    category: "ENVIRONMENT",
    title: "Sow for Tomorrow's Green Legacy",
    description:
      "Sow the seeds of environmental harmony, cultivating a greener future for generations to come. Plant today, grow forever.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
  },
  {
    category: "EDUCATION",
    title: "Empower Through Education, Transforming Lives Forever",
    description:
      "Education is the key to breaking barriers and building brighter futures for every child.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
];

export default function ProgramsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="
              bg-white
              rounded-[32px]
              overflow-hidden
              border
              border-zinc-200
              group
            "
          >
            <div className="relative h-[260px]">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-8">
              <p className="text-[#FF6A1C] text-xs font-bold uppercase tracking-[0.2em]">
                {program.category}
              </p>

              <h3 className="mt-3 text-3xl font-black leading-tight">
                {program.title}
              </h3>

              <p className="mt-4 text-zinc-600 leading-relaxed">
                {program.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}