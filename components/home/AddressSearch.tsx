"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

export function AddressSearch() {
  const [address, setAddress] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <div
        className={`flex items-center bg-surface rounded-lg border-2 transition-all duration-normal ${
          isFocused ? "border-primary shadow-default" : "border-border"
        }`}
      >
        <MapPin className="w-5 h-5 text-text-secondary ml-4" />
        <input
          type="text"
          placeholder="Enter your delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 px-4 py-3.5 text-body text-text-main placeholder:text-text-muted bg-transparent outline-none"
        />
        <button className="mr-2 p-2 hover:bg-background rounded-md transition-colors">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-text-secondary"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
