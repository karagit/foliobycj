"use client";
import React, { useState } from "react";
import Link from "next/link";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "WORKS", href: "#works" },
  { name: "CONTACT", href: "#contact" },
];

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <nav>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        className="h-6 w-6"
      >
        {open && !click ? (
          <XMarkIcon className="text-dark-400 relative z-10" />
        ) : (
          <Bars3Icon />
        )}
      </button>

      {(navigation && open && !click) && (
        <div className="bg-light w-full h-full absolute top-0 left-0 py-12 px-20">
          <p className="font-vogue-text-italic text-dark-400 menu-title">CONTENTS.</p>
          <ul className="ml-72">
            {navigation.map((item, index) => (
              <li key={index} className="mb-6" onClick={() => setClick(!click)}>
                <Link href={item.href} className="text-dark-400 text-7xl font-vogue-text-italic tracking-wider"><span className="text-accent">{`0${index+1}. `}</span>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}