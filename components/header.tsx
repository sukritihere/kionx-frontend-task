"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/image-sk2z2HRJS0TMVeUNWZ4YZTHaJI8Xa1.avif"
            alt="KoinX"
            className="h-6"
          />
        </Link>

        <button
          className="md:hidden flex items-center text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-black hover:text-gray-900 font-semibold"
          >
            Crypto Taxes
          </Link>
          <Link
            href="/"
            className="text-black hover:text-gray-900 font-semibold"
          >
            Free Tools
          </Link>
          <Link
            href="/"
            className="text-black hover:text-gray-900 font-semibold"
          >
            Resource Center
          </Link>
          <Button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded">
            Get Started
          </Button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="text-black hover:text-gray-900 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Crypto Taxes
            </Link>
            <Link
              href="/"
              className="text-black hover:text-gray-900 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Tools
            </Link>
            <Link
              href="/"
              className="text-black hover:text-gray-900 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Resource Center
            </Link>
            <Button
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
