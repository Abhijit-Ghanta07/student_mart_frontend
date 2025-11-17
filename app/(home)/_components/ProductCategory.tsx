"use client";

import { Bed, Book, Notebook } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FcElectronics } from "react-icons/fc";
import { GiClothes } from "react-icons/gi";
const categoryData = [
  {
    name: "Textbooks",
    icon: Book,
  },
  {
    name: "Electronics",
    icon: FcElectronics,
  },
  {
    name: "Clothing",
    icon: GiClothes,
  },
  {
    name: "Furniture",
    icon: Bed,
  },
  {
    name: "Notes",
    icon: Notebook,
  },
];
export function ProductCategory() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 px-4">
      {categoryData.map((item) => (
        <Link href={`/market-place?category=${item.name}`} key={item.name}>
          <div className="flex flex-1 cursor-pointer gap-3 rounded-xl border border-gray-200 bg-white p-4 items-center hover:border-primary/50 transition-colors">
            <div className="text-primary">
              <span className="material-symbols-outlined">
                <item.icon />
              </span>
            </div>
            <h3 className="text-gray-900 text-base font-bold leading-tight">
              {item.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
