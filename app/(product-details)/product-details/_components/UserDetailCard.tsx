import { ChevronRight } from "lucide-react";
import React from "react";
import { MdVerified } from "react-icons/md";

export function UserDetailCard() {
  return (
    <div className="mx-4 mt-5 flex cursor-pointer items-center gap-4 rounded-xl border border-border-light bg-card-light p-4 shadow-sm transition-shadow hover:shadow-md">
      <img
        className="size-14 rounded-full object-cover"
        data-alt="Seller's profile picture"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHuV5LkJSrVECX0AkEyLUszRkpG6B19x-285t3mFeCUCpR6lhl7TM8wJoqfYcRroQo-N203e-To15rJT3SaIqD92m5xwBuEr0Wb5Xjxd-GuqbnmhyanANZzWgD7JI0yyvHhbcfubVkOQf5FMMZBjvdufNn32q-gfZaFo-gmTR1dEGIpLLiT-GH2rmX5uaT83SmN82inM7gx5I9z4jL_Ek-ADRoVMyrhXwgfkQx9Rs3YlNI7QOSuDWrqtq920kBxi4FkKP3-ppHO3YX"
      />
      <div className="flex-1">
        <p className="font-bold">Rohan Sharma</p>
        <div className="flex items-center gap-1.5 text-sm text-primary">
          <span className="material-symbols-outlined text-base">
            <MdVerified />
          </span>
          <p className="font-semibold">Verified Student</p>
        </div>
      </div>
      <span className="material-symbols-outlined text-2xl text-text-light-secondary">
        <ChevronRight />
      </span>
    </div>
  );
}
