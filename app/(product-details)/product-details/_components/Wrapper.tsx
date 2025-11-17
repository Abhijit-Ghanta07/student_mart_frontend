import React from "react";
import { ProductHeader } from "./ProductHeader";
import { UserDetailCard } from "./UserDetailCard";
import { LocationCard } from "./LocationCard";
import { Flag } from "lucide-react";
import { ProductActionButtom } from "./ProductActionButtom";
import { ProductInfoCard } from "./ProductInfoCard";

export function ProductWrapper() {
  return (
    <div className="font-display bg-background-light text-text-light-primary">
      <div className="relative min-h-screen w-full pb-28">
        <ProductHeader />
        <main className="flex flex-col">
          <div className="relative">
            <div
              className="aspect-square w-full bg-cover bg-center"
              data-alt="Cover image of the Vintage Biology Textbook showing a detailed botanical illustration."
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQ9iodMiyiEXEQA1MQLtnl4s3gK-gV8LfrJ-aZuw906mEy-XbYfdEqaZiNLaqWNDYmL0kVjT4fsUylPkPsRNcTqdMB6agFBElSuUiHsl5PX2qvvejXM0ftCbbXbjvv5ZKFuvjkCFpSZhY2_0wsc-gQxSKkK4D2jyT6j6RIGAb2GWkPG6Hi4ypQWKziHn8AKaGP0JKi8NrDPdu68lBRm96eZzgeahG_4lgqdSAni2dibU9LFmMYCw_jN_J07068_OTkqBImMy3KsG3d")`,
              }}
            ></div>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 justify-center gap-2 rounded-full bg-black/40 px-3 py-1.5">
              <div className="size-2 rounded-full bg-white"></div>
              <div className="size-2 rounded-full bg-white/50"></div>
              <div className="size-2 rounded-full bg-white/50"></div>
              <div className="size-2 rounded-full bg-white/50"></div>
            </div>
          </div>
          <ProductInfoCard />
          <UserDetailCard />
          <div className="mt-5 px-6">
            <h3 className="text-lg font-bold">Description</h3>
            <p className="mt-2 text-base leading-relaxed text-text-light-secondary">
              This is a well-preserved vintage biology textbook from the 1980s.
              Perfect for collectors, students looking for foundational
              knowledge, or for artistic projects. The pages are slightly
              yellowed but there are no tears or markings inside. All
              illustrations are intact and beautifully detailed.
              <br />
              <br />
              Covers topics from cell biology to ecology. A true classNameic for
              any science enthusiast.
            </p>
          </div>
          <LocationCard />
          <div className="mt-6 flex justify-center">
            <button className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-text-light-secondary transition-colors hover:bg-black/5">
              <span className="material-symbols-outlined text-base">
                <Flag />
              </span>
              <span>Report this item</span>
            </button>
          </div>
        </main>
        <ProductActionButtom />
      </div>
    </div>
  );
}
