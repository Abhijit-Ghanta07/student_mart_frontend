import React from "react";

export function ProductInfoCard() {
  return (
    <div className="mx-4 mt-5 flex flex-col gap-4 rounded-xl border border-border-light bg-card-light p-5 shadow-lg">
      <div className="flex items-start justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-text-light-primary">
          Vintage Biology Textbook
        </h2>
        <p className="whitespace-nowrap text-2xl font-extrabold text-primary">
          ₹550
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-md bg-primary/20 px-3">
          <p className="text-sm font-medium text-primary">Textbook</p>
        </div>
        <div className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-md bg-secondary-accent/20 px-3">
          <p className="text-sm font-medium text-secondary-accent">
            Used - Like New
          </p>
        </div>
      </div>
      <p className="text-sm text-text-light-secondary">
        Posted on 24th July, 2024
      </p>
    </div>
  );
}
