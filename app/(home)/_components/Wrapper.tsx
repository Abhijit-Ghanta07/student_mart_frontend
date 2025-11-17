"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowRight } from "lucide-react";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { SerachCard } from "./SerachCard";
import { ProductCategory } from "./ProductCategory";
import { productData } from "../_utils/data";
import { ProductCard } from "./ProductCard";
export function HomeWrapper() {
  return (
    <div className="bg-background-light font-display text-gray-800">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <header className="sticky top-0 z-20 bg-background-light/80 backdrop-blur-sm">
          <div className="flex items-center p-4 pb-2 justify-between">
            <div className="text-primary flex size-12 shrink-0 items-center justify-start">
              <span className="material-symbols-outlined text-3xl">
                <LuGraduationCap />
              </span>
            </div>
            <h1 className="text-gray-900 text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
              CampusTrade
            </h1>
            <div className="flex w-12 items-center justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent text-gray-600 gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0 hover:bg-gray-200">
                    <span className="material-symbols-outlined">
                      <VscAccount />
                    </span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Login
                      <DropdownMenuShortcut></DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Post a Product
                    <DropdownMenuShortcut>
                      <ArrowRight className="animate-ping" />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          <SerachCard />
          <div className="px-4 py-3">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[218px] shadow-lg"
              data-alt="A vibrant scene of students on a sunny campus lawn, highlighting community and campus life."
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZD8xvih9jc5ZX8ikS66rUoRWSgKiLCntOJMbFbfFf_O9TQp-9C4zPvt6uMavYlr1XJRffaVtyR8cpBI7RwcG08iSakOc22wOpPqRX74jL9yoE1W-zgfQLv6yoHqI9YLKM0WCqB1LB73wttvt_rJeINnBAmqyPNJcCrwViaUylATIXKSJAfjJ8bu7Ny5jyujkgKG4LJLnMjXU8FnQYt60UNURYqbcpGTSTMWgXt-h4YpWxEIfYg4aLoWaAW_wo2EejwFMKociuFFv5")`,
              }}
            >
              <div className="p-5 text-white">
                <h2 className="text-2xl font-bold leading-tight">
                  Sell Your Old Textbooks
                </h2>
                <p className="text-sm mt-1 mb-4 opacity-90">
                  Find affordable dorm furniture &amp; everything you need for
                  campus life.
                </p>
                <button className="bg-primary text-background-dark font-bold py-2 px-4 rounded-lg text-sm">
                  Browse Now
                </button>
              </div>
              <div className="flex justify-center gap-2 pb-3 pt-1">
                <div className="size-2 rounded-full bg-white"></div>
                <div className="size-2 rounded-full bg-white opacity-50"></div>
                <div className="size-2 rounded-full bg-white opacity-50"></div>
              </div>
            </div>
          </div>
          <h2 className="text-gray-900 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Browse by Category
          </h2>
          <ProductCategory />
          <h2 className="text-gray-900 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">
            Just Dropped!
          </h2>
          <div className="grid grid-cols-2 gap-4 px-4 pb-24">
            {productData.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </main>
        <div className="fixed bottom-6 right-6 z-10">
          <button className="flex items-center justify-center w-16 h-16 bg-primary rounded-full shadow-lg text-white hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-3xl"> add </span>
          </button>
        </div>
      </div>
    </div>
  );
}
