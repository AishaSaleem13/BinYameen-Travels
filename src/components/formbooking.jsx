"use client";

import { useState } from "react";

const TABS = [
  { id: "umrah", label: "Umrah packages", icon: "🕋" },
  { id: "northern", label: "Northern tours", icon: "🏔️" },
  { id: "custom", label: "Custom booking", icon: "📝" },
];

const CITIES = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Multan"];
const DESTINATIONS = ["Hunza", "Skardu", "Naran", "Swat", "Fairy Meadows", "Kaghan"];

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState("umrah");
  const [tripType, setTripType] = useState("individual");

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travelers, setTravelers] = useState("1 traveler, Standard");
  const [promoCode, setPromoCode] = useState("");
  const [useInstallments, setUseInstallments] = useState(false);

  const isNorthern = activeTab === "northern";

  const handleSearch = () => {
    console.log({ activeTab, tripType, from, to, departureDate, returnDate, travelers, promoCode, useInstallments });
  };

  return (
    <div className="w-full max-w-5xl mx-auto -mt-16 relative z-30 px-4">
      {/* ---------- TAB ROW ---------- */}
      <div className="flex bg-gray-50 rounded-t-xl overflow-hidden shadow-lg">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors
              ${
                activeTab === tab.id
                  ? "bg-white text-black"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
          >
            <span aria-hidden="true">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* ---------- CARD BODY ---------- */}
      <div className="bg-white rounded-b-xl shadow-lg px-6 py-6">

        {/* --- radio row: trip type, like Return / One way / Multi-city --- */}
        <div className="flex items-center gap-8 mb-5">
          {[
            { id: "individual", label: "Individual" },
            { id: "family", label: "Family / group" },
     
          ].map((opt) => (
            <label key={opt.id} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                checked={tripType === opt.id}
                onChange={() => setTripType(opt.id)}
                className="accent-indigo-700 w-4 h-4"
              />
              {opt.label}
            </label>
          ))}
        </div>

        {/* --- single horizontal field bar --- */}
        <div className="flex flex-col md:flex-row md:items-stretch border border-gray-200 rounded-md divide-y md:divide-y-0 md:divide-x divide-gray-200">

          {/* From / To with swap icon in the middle, exactly like Qatar's layout */}
          <div className="flex items-center flex-1 px-4 py-3 gap-3 min-w-0">
            <input
              list="from-options"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From"
              className="flex-1 min-w-0 text-sm outline-none placeholder:text-gray-400"
            />
            <datalist id="from-options">
              {CITIES.map((c) => <option key={c} value={c} />)}
            </datalist>

            <button
              type="button"
              aria-label="Swap origin and destination"
              onClick={() => { setFrom(to); setTo(from); }}
              className="text-gray-400 hover:text-gray-600 shrink-0"
            >
              ⇄
            </button>

            <input
              list="to-options"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="To"
              className="flex-1 min-w-0 text-sm outline-none placeholder:text-gray-400"
            />
            <datalist id="to-options">
              {(isNorthern ? DESTINATIONS : ["Makkah", "Madinah"]).map((d) => <option key={d} value={d} />)}
            </datalist>
          </div>

          {/* Departure date */}
          <div className="flex flex-col justify-center px-4 py-3 min-w-[140px]">
            <label className="text-xs text-gray-400">Departure</label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="text-sm outline-none"
            />
          </div>

          {/* Return / end date */}
          <div className="flex flex-col justify-center px-4 py-3 min-w-[140px]">
            <label className="text-xs text-gray-400">Return</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="text-sm outline-none"
            />
          </div>

          {/* Travelers / class, like "Passengers / Class" */}
          <div className="flex flex-col justify-center px-4 py-3 min-w-[180px]">
            <label className="text-xs text-gray-400">Travelers / package</label>
            <select
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="text-sm outline-none bg-transparent"
            >
              <option>1 traveler, Standard</option>
              <option>1 traveler, VIP</option>
              <option>2 travelers, Standard</option>
              <option>Family (4+), Standard</option>
              <option>Group (10+), Standard</option>
            </select>
          </div>
        </div>

        {/* ---------- bottom row: checkbox, promo, search ---------- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-5">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={useInstallments}
              onChange={(e) => setUseInstallments(e.target.checked)}
              className="w-4 h-4 accent-indigo-700"
            />
            Pay in installments
          </label>

          <div className="flex items-center gap-2 md:ml-auto">
            <span className="text-gray-400">+</span>
            <input
              type="text"
              placeholder="Add promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="text-sm text-gray-600 outline-none placeholder:text-gray-400 w-40"
            />
          </div>

          <button
            onClick={handleSearch}
            className="bg-[#335C67] hover:bggray-500 text-black font-medium text-sm px-8 py-3 rounded-full transition-colors w-full md:w-auto"
          >
            {isNorthern ? "Search tours" : "Search packages"}
          </button>
        </div>
      </div>
    </div>
  );
}
