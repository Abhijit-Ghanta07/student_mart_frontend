"use client";
import { ArrowLeft, Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { VscShare } from "react-icons/vsc";

export function ProductHeader() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border-light bg-background-light/80 px-4 backdrop-blur-sm">
      <button
        className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-black/5"
        onClick={() => {
          router.back();
        }}
      >
        <span className="material-symbols-outlined text-2xl">
          <ArrowLeft />
        </span>
      </button>
      <h1 className="truncate text-lg font-bold">Vintage Biology Textbook</h1>
      <div className="flex items-center gap-2">
        <button className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-black/5">
          <span className="material-symbols-outlined text-2xl">
            <VscShare />
          </span>
        </button>
        <button className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-black/5">
          <span className="material-symbols-outlined text-2xl">
            <Bookmark />
          </span>
        </button>
      </div>
    </header>
  );
}
