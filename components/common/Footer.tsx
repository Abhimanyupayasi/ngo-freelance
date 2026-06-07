"use client";

import { motion } from "motion/react";
import {
  ArrowUpRightIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* CTA Section */}
        <section className="py-24 border-t border-zinc-200">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 text-[#FF7440] font-semibold uppercase tracking-[0.25em] text-sm">
              <HeartIcon className="w-4 h-4" />
              Join The Movement
            </span>

            <h2 className="mt-6 text-5xl md:text-7xl xl:text-8xl font-black uppercase leading-[0.9] text-[#181818]">
              Create
              <br />
              Lasting Impact
            </h2>

            <p className="max-w-2xl mx-auto mt-8 text-zinc-600 text-lg">
              Together we can amplify voices, support communities,
              and build a more equitable future for everyone.
            </p>

            <button
              className="
              mt-10
              bg-[#FF7440]
              hover:bg-[#ff6630]
              text-white
              px-10
              py-5
              rounded-full
              font-semibold
              uppercase
              inline-flex
              items-center
              gap-3
              transition-all
              hover:scale-105
              "
            >
              Donate Now
              <ArrowUpRightIcon className="w-5 h-5" />
            </button>
          </motion.div>
        </section>

        {/* Large Quote */}
        <section className="py-20 border-t border-zinc-200">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
              text-2xl
              md:text-4xl
              lg:text-5xl
              leading-tight
              font-bold
              text-[#181818]
              max-w-5xl
            "
          >
            Every story shared creates awareness.
            Every action creates change.
            Every donation creates opportunity.
          </motion.p>
        </section>

        {/* Footer Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-t border-zinc-200">
          <div>
            <h3 className="text-2xl font-black text-[#181818]">
              VOICES UNITED
            </h3>

            <p className="mt-4 text-zinc-600 leading-relaxed">
              Empowering communities through education,
              advocacy, storytelling and collective action.
            </p>
          </div>

          <div>
            <h4 className="uppercase text-xs font-bold tracking-widest text-[#FF7440]">
              Navigation
            </h4>

            <ul className="mt-6 space-y-3 text-zinc-700">
              <li><a href="#">Programs</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Campaigns</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase text-xs font-bold tracking-widest text-[#FF7440]">
              Get Involved
            </h4>

            <ul className="mt-6 space-y-3 text-zinc-700">
              <li><a href="#">Donate</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Partner</a></li>
              <li><a href="#">Fundraise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase text-xs font-bold tracking-widest text-[#FF7440]">
              Connect
            </h4>

            <ul className="mt-6 space-y-3 text-zinc-700">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </section>

        {/* Bottom Bar */}
        <section className="border-t border-zinc-200 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-zinc-500">
          <p>© 2026 Voices United. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </section>
      </div>
    </footer>
  );
}