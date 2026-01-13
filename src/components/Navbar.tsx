"use client";

import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import mattRiggMarkImg from "../images/matt-rigg-mark.svg";
import classNames from "../utils/classNames";
import { smoothScrollToAnchor } from "../utils/smoothScrollTo";

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
      aria-label="Main navigation"
    >
      <Link href="/" className="-m-1.5 p-1.5 text-2xl font-semibold text-gray-50">
        <ExportedImage
          src={mattRiggMarkImg}
          alt="Matt Rigg"
          width={200}
          height={28}
        />
      </Link>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="/#contact"
          className="font-semibold leading-6 text-gray-50 hover:text-gray-200 transition-colors"
          onClick={smoothScrollToAnchor}
        >
          Contact <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
}
