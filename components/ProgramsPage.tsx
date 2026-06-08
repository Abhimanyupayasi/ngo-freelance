"use client";

import Image from "next/image";
import { motion } from "motion/react";

import {
  FaTint,
  FaTshirt,
  FaHandsHelping,
  FaFemale,
  FaBookOpen,
  FaSeedling,
} from "react-icons/fa";

const programs = [
  {
    title: "Blood Donation Camp",
    icon: FaTint,
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200",
    color: "#FF7440",
  },
  {
    title: "Clothes Aid Initiative",
    icon: FaTshirt,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200",
    color: "#F5788B",
  },
  {
    title: "Feeding The Needy",
    icon: FaHandsHelping,
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200",
    color: "#FFAE56",
  },
  {
    title: "Women's Empowerment",
    icon: FaFemale,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200",
    color: "#FF7440",
  },
  {
    title: "Save Water Save Life",
    icon: FaSeedling,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
    color: "#4F9CF9",
  },
  {
    title: "Education For All",
    icon: FaBookOpen,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200",
    color: "#FFDA62",
  },
];

export default function ProgramsPage() {
  return (
    <section className="bg-[#FAF8F5]">
      {/* Hero */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.3em] text-[#FF7440] font-semibold">
            Our Programs
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl xl:text-8xl font-black uppercase leading-[0.9] text-[#181818]">
            Creating Impact
            <br />
            Through Action
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-zinc-600 text-lg">
            Every initiative we undertake is driven by compassion,
            community engagement, and sustainable change.
          </p>
        </motion.div>
      </div>

      {/* Impact Stats */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["250+", "Blood Drives"],
            ["50K+", "Meals Served"],
            ["20K+", "Students Reached"],
            ["100+", "Communities"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="bg-white rounded-[24px] p-8 text-center shadow-sm"
            >
              <h2 className="text-4xl font-black text-[#FF7440]">
                {number}
              </h2>

              <p className="mt-2 text-zinc-600">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Programs */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  bg-white
                  rounded-[30px]
                  overflow-hidden
                  shadow-sm
                  group
                "
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="p-8">
                  <Icon
                    size={34}
                    style={{
                      color: program.color,
                    }}
                  />

                  <h3 className="mt-5 text-2xl font-black text-[#181818]">
                    {program.title}
                  </h3>

                  <p className="mt-4 text-zinc-600 leading-relaxed">
                    Supporting communities through meaningful
                    initiatives that create opportunities,
                    improve lives and inspire lasting change.
                  </p>

                  <button
                    className="
                    mt-6
                    text-[#FF7440]
                    font-semibold
                    hover:translate-x-1
                    transition
                    "
                  >
                    Learn More →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-24">
        <div
          className="
          rounded-[40px]
          bg-[#FF7440]
          text-white
          p-12
          md:p-20
          text-center
          "
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase">
            Join Our Mission
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-white/90">
            Whether through volunteering, donations,
            partnerships or advocacy, your support helps
            transform lives and strengthen communities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="bg-white text-[#FF7440] px-8 py-4 rounded-full font-semibold">
              Become A Volunteer
            </button>

            <button className="border border-white px-8 py-4 rounded-full font-semibold">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}