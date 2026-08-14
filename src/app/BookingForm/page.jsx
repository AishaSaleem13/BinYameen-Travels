"use client";

import React, { Suspense } from "react";
import BookingPage from "../../components/Bookingpage"

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
      <BookingPage />
    </Suspense>
  );
}