"use client";
import React, { useState } from "react";

const photos = [
  "/highlights/japan1.jpg",
  "/highlights/japan2.jpg",
  "/highlights/japan3.jpg",
  "/highlights/japan4.jpg",
  "/highlights/japan5.jpg",
  "/highlights/japan6.jpg",
  "/highlights/japan7.jpg",
  "/highlights/japan8.jpg",
];

export default function MiscFeature() {
  const [active, setActive] = useState("highlights");

  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden mb-6">
        <button
          onClick={() => setActive("highlights")}
          className={`px-4 py-2 text-lg font-bold ${
            active === "highlights" ? "bg-gray-200" : "hover:bg-gray-100"
          }`}
        >
          Highlights of My Life
        </button>
        <button
          onClick={() => setActive("random")}
          className={`px-4 py-2 text-lg font-bold ${
            active === "random" ? "bg-gray-200" : "hover:bg-gray-100"
          }`}
        >
          Random Stuff
        </button>
      </div>

      {active === "highlights" && (
        <div className="w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-20">
          {photos.map((src, i) => (
            <div
              key={i}
              className="relative w-full aspect-square overflow-hidden rounded-lg shadow transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={src}
                alt={`Highlight ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {active === "random" && <div>…random content here…</div>}
    </div>
  );
}