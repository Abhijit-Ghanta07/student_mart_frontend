"use client";
import { InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Search } from "lucide-react";
import React from "react";

export function SerachCard() {
  return (
    <div className="px-4 py-3">
      <label className="flex flex-col min-w-40 h-12 w-full">
        <InputGroupAddon className="group bg-white rounded-lg shadow-sm ring-primary">
          <InputGroupInput
            placeholder="Search Books"
            className="focus:group:ring-2 "
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroupAddon>
      </label>
    </div>
  );
}
