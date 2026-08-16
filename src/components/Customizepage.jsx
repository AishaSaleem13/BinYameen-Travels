"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Users,
  CalendarDays,
  Moon,
  Hotel,
  Car,
  MessageSquare,
  Send,
  ShieldCheck,
  MapPin,
  Plane,
} from "lucide-react";

import { Customizeapi } from "../../environment";


const Field = ({ label, icon: Icon, children }) => (
  <div
    className="
      group
      rounded-lg
      border border-gray-200
      bg-white
      px-3
      py-2
      transition-all duration-200
      hover:border-gray-300
      focus-within:border-[#800E13]/50
    "
  >
    <div className="mb-0.5 flex items-center gap-1.5">
      <Icon className="h-3.5 w-3.5 text-gray-400 transition-colors group-focus-within:text-[#800E13]" />

      <label className="text-[10px] font-medium text-gray-400">
        {label}
      </label>
    </div>

    {children}
  </div>
);

export default function CustomizeForm({
  TripType: initialTripType = "",
  PackageId = "",
  PackageName = "",
}) {
  /*
  ============================================================
  TRIP TYPE
  ============================================================

  If Customize is opened from an Umrah package:
  TripType = "Umrah"

  If opened from Navbar:
  TripType = ""

  Therefore:
  - Umrah package => NO journey type selector
  - Navbar => journey type selector appears
  */

  const [tripType, setTripType] = useState(initialTripType);

  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    PhoneNumber: "",

    TripType: initialTripType || "",

    Destination: "",

    TravelMonth: "2026-",

    NoOfPersons: "",

    NoOfNights: "",
    NumberOfDays: "",

    HotelCategory: "",
    Sharing: "",
    Transportation: "",

    Message: "",
  });

  const [loading, setLoading] = useState(false);

  const inputClasses =
    "w-full bg-transparent text-[12px] text-gray-700 outline-none placeholder:text-gray-400";

  const updateField = (key) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleTripType = (value) => {
    setTripType(value);

    setFormData((prev) => ({
      ...prev,
      TripType: value,

      // Clear fields that don't belong to the new trip type
      Destination: "",
      NoOfNights: "",
      NumberOfDays: "",
      HotelCategory: "",
      Sharing: "",
      Transportation: "",
    }));
  };

  const handleSubmit = async () => {
    if (!formData.FullName || !formData.PhoneNumber || !formData.Email) {
      alert("Please fill in your basic details.");
      return;
    }

    if (!tripType) {
      alert("Please select your journey type.");
      return;
    }

    setLoading(true);

    try {
      console.log("Customize Trip Data:", formData);

      const res = await fetch(Customizeapi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          TripType: tripType,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log("Customize enquiry submitted:", data);

      alert(
        "Your customization request has been submitted successfully!"
      );

      setFormData({
        FullName: "",
        Email: "",
        PhoneNumber: "",
        TripType: initialTripType || "",
        Destination: "",
        TravelMonth: "",
        NoOfPersons: "",
        NoOfNights: "",
        NumberOfDays: "",
        HotelCategory: "",
        Sharing: "",
        Transportation: "",
        Message: "",
      });
     

    } catch (error) {
      console.error("Customize error:", error);

      alert(
        "Failed to submit customization request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const isUmrah = tripType === "Umrah";
  const isNorthern = tripType === "Northern";
  const isInternational = tripType === "International";

  return (
    <section className="w-full bg-[#faf9f8] px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">

        {/* ==================================================
            HEADING
        ================================================== */}

        <div className="mb-7 text-center">

          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#800E13]">
            Customize Your Journey
          </p>

          <h2 className="font-serif text-2xl text-gray-900 sm:text-3xl">
            Make your trip truly yours
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-gray-500 sm:text-sm">
            Tell us what you would like to change and our travel
            advisors will create a journey around your preferences.
          </p>

        </div>


        {/* ==================================================
            MAIN CARD
        ================================================== */}

        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-6">

          {/* HEADER */}

          <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">

            <div className="flex items-center gap-2">

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#800E13]/5">
                <Plane className="h-4 w-4 text-[#800E13]" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Customize enquiry
                </h3>

                <p className="text-[10px] text-gray-400">
                  Tell us your preferences
                </p>
              </div>

            </div>

            <ShieldCheck className="h-4 w-4 text-gray-300" />

          </div>


          {/* ==================================================
              SELECTED PACKAGE
          ================================================== */}

          {PackageName && (
            <div className="mb-4 flex items-center justify-between rounded-lg border border-[#800E13]/10 bg-[#800E13]/5 px-3 py-2.5">

              <div className="flex items-center gap-2">

                <MapPin className="h-3.5 w-3.5 text-[#800E13]" />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#800E13]">
                    Selected Package
                  </p>

                  <p className="text-xs font-semibold text-gray-800">
                    {PackageName}
                  </p>
                </div>

              </div>

              <span className="text-[9px] font-medium text-[#800E13]">
                Customize
              </span>

            </div>
          )}


          {/* ==================================================
              JOURNEY TYPE
              ONLY SHOWN WHEN COMING FROM NAVBAR
          ================================================== */}

          {!initialTripType && (
            <div className="mb-4">

              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                Journey Type
              </p>

              <div className="grid grid-cols-3 gap-2">

                {["Umrah", "Northern", "International"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleTripType(type)}
                    className={`
                      rounded-lg
                      border
                      px-3
                      py-2.5
                      text-[10px]
                      font-semibold
                      transition-all
                      duration-200

                      ${
                        tripType === type
                          ? "border-[#800E13] bg-[#800E13] text-white"
                          : "border-gray-200 bg-white text-gray-500 hover:border-[#800E13]/40 hover:text-[#800E13]"
                      }
                    `}
                  >
                    {type}
                  </button>
                ))}

              </div>

            </div>
          )}


          {/* ==================================================
              FORM
          ================================================== */}

          <div className="space-y-3">

            {/* BASIC DETAILS */}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              <Field label="Full Name" icon={User}>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.FullName}
                  onChange={updateField("FullName")}
                  className={inputClasses}
                />
              </Field>

              <Field label="WhatsApp Number" icon={Phone}>
                <input
                  type="tel"
                  placeholder="03XXXXXXXXX"
                  value={formData.PhoneNumber}
                  onChange={updateField("PhoneNumber")}
                  className={inputClasses}
                />
              </Field>

            </div>


            <Field label="Email Address" icon={Mail}>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.Email}
                onChange={updateField("Email")}
                className={inputClasses}
              />
            </Field>


            {/* PERSON + MONTH */}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              <Field label="Travellers" icon={Users}>
                <input
                  type="number"
                  min="1"
                  placeholder="No. of persons"
                  value={formData.NoOfPersons}
                  onChange={updateField("NoOfPersons")}
                  className={inputClasses}
                />
              </Field>

              <Field label="Travel Month" icon={CalendarDays}>
                <input
                  type="month"
                  value={formData.TravelMonth}
                  onChange={updateField("TravelMonth")}
                  className={inputClasses}
                />
              </Field>

            </div>


            {/* ==================================================
                UMRAH OPTIONS
            ================================================== */}

            {isUmrah && (
              <>
                <div className="pt-2">

                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#800E13]">
                    Umrah Preferences
                  </p>

                </div>


                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  <Field label="Number of Nights" icon={Moon}>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 10"
                      value={formData.NoOfNights}
                      onChange={updateField("NoOfNights")}
                      className={inputClasses}
                    />
                  </Field>


                  <Field label="Hotel Category" icon={Hotel}>
                    <select
                      value={formData.HotelCategory}
                      onChange={updateField("HotelCategory")}
                      className={inputClasses}
                    >
                      <option value="">
                        Select hotel
                      </option>

                      <option value="3 Star">
                        3 Star
                      </option>

                      <option value="4 Star">
                        4 Star
                      </option>

                      <option value="5 Star">
                        5 Star
                      </option>

                      <option value="6 Star">
                        6 Star
                      </option>
                    </select>
                  </Field>

                </div>


                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  <Field label="Sharing" icon={Users}>
                    <select
                      value={formData.Sharing}
                      onChange={updateField("Sharing")}
                      className={inputClasses}
                    >
                      <option value="">
                        Select sharing
                      </option>

                      <option value="Quad Sharing">
                        Quad Sharing
                      </option>

                      <option value="Triple Sharing">
                        Triple Sharing
                      </option>

                      <option value="Double Sharing">
                        Double Sharing
                      </option>

                      <option value="Private Room">
                        Private Room
                      </option>
                    </select>
                  </Field>


                  <Field label="Transportation" icon={Car}>
                    <select
                      value={formData.Transportation}
                      onChange={updateField("Transportation")}
                      className={inputClasses}
                    >
                      <option value="">
                        Select transport
                      </option>

                      <option value="Shared Transport">
                        Shared Transport
                      </option>

                      <option value="Private Car">
                        Private Car
                      </option>

                      <option value="VIP Private Car">
                        VIP Private Car
                      </option>

                      <option value="No Transportation">
                        No Transportation
                      </option>
                    </select>
                  </Field>

                </div>
              </>
            )}


            {/* ==================================================
                NORTHERN / INTERNATIONAL
            ================================================== */}

            {(isNorthern || isInternational) && (
              <>
                <div className="pt-2">

                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#800E13]">
                    Trip Preferences
                  </p>

                </div>


                <Field label="Destination" icon={MapPin}>
                  <input
                    type="text"
                    placeholder={
                      isNorthern
                        ? "e.g. Hunza, Skardu, Swat"
                        : "e.g. Dubai, Turkey, Malaysia"
                    }
                    value={formData.Destination}
                    onChange={updateField("Destination")}
                    className={inputClasses}
                  />
                </Field>


                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  <Field label="Number of Nights" icon={Moon}>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 5"
                      value={formData.NoOfNights}
                      onChange={updateField("NoOfNights")}
                      className={inputClasses}
                    />
                  </Field>


                  <Field label="Number of Days" icon={CalendarDays}>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 6"
                      value={formData.NumberOfDays}
                      onChange={updateField("NumberOfDays")}
                      className={inputClasses}
                    />
                  </Field>

                </div>


                <Field label="Hotel Category" icon={Hotel}>
                  <select
                    value={formData.HotelCategory}
                    onChange={updateField("HotelCategory")}
                    className={inputClasses}
                  >
                    <option value="">
                      Select hotel
                    </option>

                    <option value="3 Star">
                      3 Star
                    </option>

                    <option value="4 Star">
                      4 Star
                    </option>

                    <option value="5 Star">
                      5 Star
                    </option>
                  </select>
                </Field>

              </>
            )}


            {/* MESSAGE */}

            <Field label="Message" icon={MessageSquare}>
              <textarea
                rows="3"
                placeholder="Tell us anything you'd like to customize..."
                value={formData.Message}
                onChange={updateField("Message")}
                className={`${inputClasses} resize-none`}
              />
            </Field>

          </div>


          {/* ==================================================
              SUBMIT
          ================================================== */}

          <div className="mt-5 border-t border-gray-100 pt-4">

            <div className="mb-3 flex items-center gap-1.5 text-[10px] text-gray-400">
              <ShieldCheck className="h-3.5 w-3.5" />

              <span>
                Your information is safe with us
              </span>
            </div>


            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="
                flex
                h-10
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#800E13]
                px-5
                text-xs
                font-medium
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:bg-[#690b0f]
                hover:shadow-md
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >

              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  Send Customization Request
                </>
              )}

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}