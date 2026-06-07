"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GlobeAltIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
  "Programs",
  "Blog & Advocacy",
  "Stories",
  "Contact",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Top Accent Bar */}
      <div className="fixed top-0 left-0 right-0 h-[4px] bg-[#FF6A1C] z-[60]" />

      {/* Header */}
      <header className="fixed top-[4px] left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-zinc-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="flex gap-1">
                <div className="h-5 w-2 rounded-full bg-[#FF6A1C]" />
                <div className="h-5 w-2 rounded-full bg-[#F5788B]" />
              </div>

              <span className="font-black tracking-wide text-sm sm:text-base">
                VOICES UNITED
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    transition
                    hover:text-[#FF6A1C]
                  "
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-zinc-100 transition">
                <GlobeAltIcon className="h-5 w-5" />
              </button>

              <button
                className="
                  border border-zinc-300
                  px-6 py-3
                  rounded-full
                  text-xs
                  font-semibold
                  transition
                  hover:bg-zinc-900
                  hover:text-white
                "
              >
                DONATE
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 220,
              }}
              className="
                fixed
                top-0
                right-0
                h-screen
                w-[85%]
                max-w-sm
                bg-[#FAF8F5]
                z-[100]
                shadow-2xl
                border-l
                border-zinc-200
              "
            >
              {/* Drawer Header */}
              <div className="h-24 flex items-center justify-between px-6 border-b border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="h-5 w-2 rounded-full bg-[#FF6A1C]" />
                    <div className="h-5 w-2 rounded-full bg-[#F5788B]" />
                  </div>

                  <span className="font-black text-sm tracking-wide">
                    VOICES UNITED
                  </span>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-7 w-7" />
                </button>
              </div>

              {/* Links */}
              <nav className="px-8 py-6">
                <div className="flex flex-col">
                  {navLinks.map((item) => (
                    <a
                      key={item}
                      href="#"
                      onClick={() => setOpen(false)}
                      className="
                        py-5
                        border-b
                        border-zinc-200
                        text-lg
                        font-semibold
                        hover:text-[#FF6A1C]
                        transition
                      "
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* Mobile Actions */}
                <div className="mt-10 space-y-4">
                  <button className="w-full border border-zinc-300 py-4 rounded-full font-semibold">
                    Language
                  </button>

                  <button
                    className="
                      w-full
                      bg-[#FF6A1C]
                      text-white
                      py-4
                      rounded-full
                      font-semibold
                      hover:opacity-90
                      transition
                    "
                  >
                    DONATE
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}