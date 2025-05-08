"use client";
import React, { useState } from "react";

const photos = [
  { image: "/highlights/snowboard.jpg", description: "Snowboarding in Sierra at Tahoe" },
  { image: "/highlights/japan1.jpg",      description: "First Meal in Japan" },
  { image: "/highlights/japan2.jpg",      description: "Gyukatsu, Favorite Meal in Japan" },
  { image: "/highlights/japan3.jpg",      description: "Okutama Nature" },
  { image: "/highlights/japan4.jpg",      description: "More of Okutama" },
  { image: "/highlights/japan5.jpg",      description: "Cool Car in Ginza" },
  { image: "/highlights/japan6.jpg",      description: "Giant Budda Statue in Kamakura" },
  { image: "/highlights/japan7.jpg",      description: "" },
  { image: "/highlights/japan8.jpg",      description: "" }
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
          Highlights
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
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative w-full aspect-square overflow-hidden rounded-lg shadow transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="aspect-square relative">
                  <img
                    src={photo.image}
                    alt="photo"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  

                    <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 text-white p-3">
                      <p className="text-sm font-medium">{photo.description}</p>
                    </div>
                </div>
            </div>
          ))}
        </div>
      )}

      {active === "random" && <div>…random content here…</div>}
    </div>
  );
}