import React from "react";
import { MdLocationOn } from "react-icons/md";

export function LocationCard() {
  return (
    <div className="mt-5 px-6">
      <h3 className="text-lg font-bold">Pickup Location</h3>
      <div className="mt-2 flex items-center gap-2 text-text-light-secondary">
        <span className="material-symbols-outlined text-xl">
          <MdLocationOn />
        </span>
        <p>Near Central Campus Library</p>
      </div>
      <div
        className="mt-3 h-32 w-full rounded-lg bg-gray-300"
        data-alt="A simplified map showing a pin at the Central Campus Library location."
        data-location="University Campus Area"
        style={{
          backgroundImage: ` url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2_9JZgiehQZ6CzodcpNdlP2UwMAlVyuO259J3EwzHi2Llw8PkvQqElGZV_qMcZGP0qawXPxEtRXRQQ9-kEZjfxiYBCk1OMOD-xMMicg9g8ULUxdEgtxEzqFgu7E1Y8IG_avnHueNitSXGQXtqgJNuv1StQi7fznZ82yRI5sDTywnazPxvpBSPZJZ5guqb8CYdANKObVaER8pUld4g_T22Z0uUJ2XoOD7XaxZKm_qF_FWmarXwz0FYBeg9ueW3RARC-_K7NCDVzONU')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
