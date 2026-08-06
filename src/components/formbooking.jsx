"use client";

import { useState } from "react";
import {
  Building2,
  Plane,
  Mountain,
  ClipboardEdit,
  MapPin,
  CalendarRange,
  Users,
  Package as PackageIcon,
  User,
  Phone,
  Mail,
  MessageSquare,
  Send,
  ShieldCheck,
} from "lucide-react";

// ---------- static config ----------

const TABS = [
  { id: "umrah", label: "Umrah", icon: Building2 },
  { id: "international", label: "International", icon: Plane },
  { id: "pakistan", label: "Pakistan Tours", icon: Mountain },
  { id: "custom", label: "Custom Trip", icon: ClipboardEdit },
];

const CITIES = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Multan"];
const NORTHERN_DESTINATIONS = ["Hunza", "Skardu", "Naran", "Swat", "Fairy Meadows", "Kaghan"];
const INTL_DESTINATIONS = ["Dubai", "Turkey", "Malaysia", "Thailand", "UK", "Saudi Arabia"];

const TRAVELER_OPTIONS = ["1 Adult", "2 Adults", "Family (4+)", "Group (10+)"];
const PACKAGE_OPTIONS = ["Standard", "VIP / Premium", "Economy", "Custom"];
const BUDGET_OPTIONS = ["Under PKR 100,000", "PKR 100,000 – 300,000", "PKR 300,000+", "Not sure yet"];

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState("umrah");

  // one shared form-data object — keys are only read for the fields
  // that are actually rendered for the current tab, so nothing leaks
  // between tabs when the user switches.
  const [formData, setFormData] = useState({
    travelType: "Individual",
    from: "",
    destination: "",
    travelDates: "",
    travelers: "",
    package: "",
    tripRequirements: "",
    budgetRange: "",
    name: "",
    whatsapp: "",
    email: "",
    message: "",
  });

  const updateField = (key) => (e) =>
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = () => {
    console.log({ activeTab, ...formData });
    // TODO: wire this up to your API route / email service / WhatsApp deep link
  };

  // Small reusable field shell: label on top, icon + control below.
  // Keeping this as one component means every field looks consistent
  // without repeating the wrapper markup everywhere.
  const Field = ({ label, icon: Icon, children }) => (
    <div className="flex-1 min-w-[140px] border border-gray-200 rounded-md px-3 py-2">
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-gray-400 shrink-0" />
        {children}
      </div>
    </div>
  );

  const selectClasses = "flex-1 min-w-0 text-sm outline-none bg-transparent text-gray-800";
  const inputClasses = "flex-1 min-w-0 text-sm outline-none placeholder:text-gray-400 text-gray-800";

  // ---------- trip-specific fields, one block per tab ----------
  // This is the part that makes the form "adapt" — each tab renders
  // a different set of Field components instead of one fixed layout.

  const renderTripFields = () => {
    switch (activeTab) {
      case "umrah":
        return (
          <>
            <Field label="Travel Type" icon={Users}>
              <select value={formData.travelType} onChange={updateField("travelType")} className={selectClasses}>
                <option>Individual</option>
                <option>Family / Group</option>
              </select>
            </Field>

            <Field label="From" icon={MapPin}>
              <select value={formData.from} onChange={updateField("from")} className={selectClasses}>
                <option value="">Select city</option>
                {CITIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>

            <Field label="Travel Dates" icon={CalendarRange}>
              <input
                type="date"
                value={formData.travelDates}
                onChange={updateField("travelDates")}
                className={inputClasses}
              />
            </Field>

            <Field label="Travelers" icon={Users}>
              <select value={formData.travelers} onChange={updateField("travelers")} className={selectClasses}>
                <option value="">Select</option>
                {TRAVELER_OPTIONS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>

            <Field label="Package" icon={PackageIcon}>
              <select value={formData.package} onChange={updateField("package")} className={selectClasses}>
                <option value="">Select package</option>
                {PACKAGE_OPTIONS.map((p) => <option key={p}>{p}</option>)}
              </select>
            </Field>
          </>
        );

      case "international":
        return (
          <>
            <Field label="Destination" icon={MapPin}>
              <select value={formData.destination} onChange={updateField("destination")} className={selectClasses}>
                <option value="">Where to?</option>
                {INTL_DESTINATIONS.map((d) => <option key={d}>{d}</option>)}
              </select>
            </Field>

            <Field label="From City" icon={MapPin}>
              <select value={formData.from} onChange={updateField("from")} className={selectClasses}>
                <option value="">Select city</option>
                {CITIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>

            <Field label="Travel Dates" icon={CalendarRange}>
              <input
                type="date"
                value={formData.travelDates}
                onChange={updateField("travelDates")}
                className={inputClasses}
              />
            </Field>

            <Field label="Travelers" icon={Users}>
              <select value={formData.travelers} onChange={updateField("travelers")} className={selectClasses}>
                <option value="">Select</option>
                {TRAVELER_OPTIONS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
          </>
        );

      case "pakistan":
        return (
          <>
            <Field label="Destination" icon={Mountain}>
              <select value={formData.destination} onChange={updateField("destination")} className={selectClasses}>
                <option value="">Where to?</option>
                {NORTHERN_DESTINATIONS.map((d) => <option key={d}>{d}</option>)}
              </select>
            </Field>

            <Field label="Travel Dates" icon={CalendarRange}>
              <input
                type="date"
                value={formData.travelDates}
                onChange={updateField("travelDates")}
                className={inputClasses}
              />
            </Field>

            <Field label="Travelers" icon={Users}>
              <select value={formData.travelers} onChange={updateField("travelers")} className={selectClasses}>
                <option value="">Select</option>
                {TRAVELER_OPTIONS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
          </>
        );

      case "custom":
        return (
          <>
            <Field label="Where do you want to go?" icon={MapPin}>
              <input
                type="text"
                placeholder="Type a destination"
                value={formData.destination}
                onChange={updateField("destination")}
                className={inputClasses}
              />
            </Field>

            <Field label="Travel Dates" icon={CalendarRange}>
              <input
                type="date"
                value={formData.travelDates}
                onChange={updateField("travelDates")}
                className={inputClasses}
              />
            </Field>

            <Field label="Travelers" icon={Users}>
              <select value={formData.travelers} onChange={updateField("travelers")} className={selectClasses}>
                <option value="">Select</option>
                {TRAVELER_OPTIONS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>

            <Field label="Budget Range (Optional)" icon={PackageIcon}>
              <select value={formData.budgetRange} onChange={updateField("budgetRange")} className={selectClasses}>
                <option value="">Select</option>
                {BUDGET_OPTIONS.map((b) => <option key={b}>{b}</option>)}
              </select>
            </Field>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto -mt-16 relative z-30 px-4">
      {/* ---------- TAB ROW ---------- */}
      <div className="flex bg-gray-50  mt-4 rounded-t-xl overflow-hidden shadow-lg">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              // flex-1 so all 4 tabs share width evenly instead of hugging their text
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium transition-colors
                ${
                  isActive
                    ? "bg-[#6C757D] text-white"       // active tab: dark teal, matches the button color
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                }`}
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ---------- CARD BODY ---------- */}
      <div className="bg-white rounded-b-xl  shadow-lg px-6 py-6">
        {/* --- trip-specific fields: wraps responsively, count varies per tab --- */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-3 mb-5">
          {renderTripFields()}
        </div>

        {/* --- shared contact block, same across every tab --- */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-3 pt-5 border-t border-gray-100">
          <Field label="Your Name" icon={User}>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={updateField("name")}
              className={inputClasses}
            />
          </Field>

          <Field label="WhatsApp Number" icon={Phone}>
            <input
              type="tel"
              placeholder="03XXXXXXXXX"
              value={formData.whatsapp}
              onChange={updateField("whatsapp")}
              className={inputClasses}
            />
          </Field>

          <Field label="Email Address" icon={Mail}>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={updateField("email")}
              className={inputClasses}
            />
          </Field>

          <Field
            label={activeTab === "custom" ? "Trip Requirements" : "Additional Message (Optional)"}
            icon={MessageSquare}
          >
            <input
              type="text"
              placeholder="Any special requirements?"
              value={activeTab === "custom" ? formData.tripRequirements : formData.message}
              onChange={updateField(activeTab === "custom" ? "tripRequirements" : "message")}
              className={inputClasses}
            />
          </Field>
        </div>

        {/* ---------- bottom row: trust line + submit ---------- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-5">
          <p className="flex items-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4" />
            Your information is safe with us
          </p>

          <button
            onClick={handleSubmit}
            className="flex items-center justify-center gap-2 bg-[#800E13] hover:bg-[#2a4a53] text-white font-medium text-sm px-8 py-3 rounded-full transition-colors w-full md:w-auto"
          >
            <Send className="w-4 h-4" />
            Send Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}