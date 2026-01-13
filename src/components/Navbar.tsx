"use client";

import React from "react";
import Link from "next/link";
import { smoothScrollToAnchor } from "../utils/smoothScrollTo";
import classNames from "../utils/classNames";

const gradientBgClasses = "bg-gradient-to-b from-gray-900/90 to-transparent";

interface NavbarProps {
  withGradient?: boolean;
}

export default function Navbar({ withGradient }: NavbarProps) {
  return (
    <nav
      className={classNames(
        "flex items-center justify-between p-6 lg:px-8",
        !!withGradient && gradientBgClasses,
      )}
      aria-label="Global"
    >
      <Link href="/" className="-m-1.5 p-1.5 text-2xl font-semibold text-gray-50">
        <img src="/images/matt-rigg-mark.svg" alt="Matt Rigg" className="w-fit-content h-7" />
      </Link>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="/#contact"
          className="font-semibold leading-6 text-gray-50"
          onClick={smoothScrollToAnchor}
        >
          Contact <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
}
