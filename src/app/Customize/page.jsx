"use client";

import React, { Suspense } from "react";

import Customize from "@/components/customize";

export default function BookingForm() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#faf9f8]">
          <p className="text-sm text-gray-500">
            Loading booking form...
          </p>
        </div>
      }
    >
      <Customize />
    </Suspense>
  );
}