import React from "react";

export function ProductActionButtom() {
  return (
    <div className="fixed bottom-0 left-0 z-10 w-full border-t border-border-light bg-background-light/80 px-4 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <button className="flex-1 rounded-full bg-primary/20 px-6 py-3.5 text-center font-bold text-primary transition-colors hover:bg-primary/30">
          Make an Offer
        </button>
        <button className="flex-1 rounded-full bg-primary px-6 py-3.5 text-center font-bold text-background-dark transition-opacity hover:opacity-90">
          Chat with Seller
        </button>
      </div>
    </div>
  );
}
