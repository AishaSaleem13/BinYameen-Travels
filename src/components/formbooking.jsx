"use client";

import { useState } from "react";
import {
  Plane,
  User,
  Phone,
  Mail,
  MessageSquare,
  Send,
  ShieldCheck,
  Users,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { Bookingapi } from "../../environment";

/* ============================================================
   FIELD COMPONENT
============================================================ */

const Field = ({ label, icon: Icon, children }) => (
  <div
    className="
      group
      rounded-lg
      border border-gray-200
      bg-white
      px-2.5 py-1.5
      sm:px-3 sm:py-2
      transition-all
      duration-200
      hover:border-gray-300
      focus-within:border-[#800E13]/50
    "
  >
    <div className="mb-0.5 flex items-center gap-1.5">
      <Icon
        className="
          h-3 w-3
          text-gray-400
          transition-colors
          group-focus-within:text-[#800E13]
          sm:h-3.5 sm:w-3.5
        "
      />

      <label className="text-[9px] font-medium text-gray-400 sm:text-[10px]">
        {label}
      </label>
    </div>

    {children}
  </div>
);

/* ============================================================
   BOOKING WIDGET
============================================================ */

export default function BookingWidget({
  PackageId,
  PackageName,
  PackageImage,
  variant = "home",
}) {
  const [formData, setFormData] = useState({
    FullName: "",
    PhoneNumber: "",
    Email: "",
    NoOfPerson: "",
    Month: "",
    Message: "",
    PackageId: PackageId || "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  /* ============================================================
     UPDATE FORM FIELD
  ============================================================ */

  const updateField = (key) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  /* ============================================================
     SUBMIT FORM
  ============================================================ */

  const handleSubmit = async () => {
    setLoading(true);
    setStatus("");

    try {
      console.log("Booking Data:", formData);

      const res = await fetch(Bookingapi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log("Booking submitted:", data);

      setStatus("success");

      setFormData({
        FullName: "",
        PhoneNumber: "",
        Email: "",
        NoOfPerson: "",
        Month: "",
        Message: "",
        PackageId: PackageId || "",
      });
    } catch (error) {
      console.error("Booking error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  /* ============================================================
     INPUT CLASSES
  ============================================================ */

  const inputClasses =
    "w-full bg-transparent text-[11px] text-gray-700 outline-none placeholder:text-gray-400 sm:text-[12px]";

  /* ============================================================
     BOOKING PAGE UI
  ============================================================ */

  if (variant === "page") {
    return (
      <section className="w-full bg-[#faf9f8] px-3 py-6 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-5xl">

          {/* PAGE HEADING */}

          <div className="mb-4 text-center sm:mb-7">
            <p
              className="
                mb-1.5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#800E13]
                sm:mb-2
                sm:text-[10px]
              "
            >
              Plan Your Journey
            </p>

            <h2
              className="
                font-serif
                text-xl
                leading-tight
                text-gray-900
                sm:text-3xl
              "
            >
              Let&apos;s plan your perfect trip
            </h2>

            <p
              className="
                mx-auto
                mt-1.5
                max-w-lg
                text-[11px]
                leading-relaxed
                text-gray-500
                sm:mt-2
                sm:text-sm
              "
            >
              Tell us a little about your trip and our travel advisors
              will get back to you shortly.
            </p>
          </div>

          {/* MAIN CONTENT */}

          <div
            className="
              grid
              items-start
              gap-4
              sm:gap-5
              lg:grid-cols-[1fr_320px]
            "
          >

            {/* FORM CARD */}

            <div
              className="
                rounded-xl
                border
                border-gray-200
                bg-white
                p-3.5
                shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                sm:rounded-2xl
                sm:p-6
              "
            >

              {/* FORM HEADER */}

              <div
                className="
                  mb-3
                  flex
                  items-center
                  justify-between
                  border-b
                  border-gray-100
                  pb-3
                  sm:mb-5
                  sm:pb-4
                "
              >
                <div className="flex items-center gap-2">
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[#800E13]/5
                      sm:h-8
                      sm:w-8
                    "
                  >
                    <Plane
                      className="
                        h-3.5
                        w-3.5
                        text-[#800E13]
                        sm:h-4
                        sm:w-4
                      "
                    />
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-gray-900 sm:text-sm">
                      Booking enquiry
                    </h3>

                    <p className="text-[9px] text-gray-400 sm:text-[10px]">
                      Your details
                    </p>
                  </div>
                </div>

                <ShieldCheck
                  className="
                    h-3.5
                    w-3.5
                    text-gray-300
                    sm:h-4
                    sm:w-4
                  "
                />
              </div>

              {/* FORM FIELDS */}

              <div className="space-y-2 sm:space-y-3">

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

                <Field label="Email Address" icon={Mail}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.Email}
                    onChange={updateField("Email")}
                    className={inputClasses}
                  />
                </Field>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">

                  <Field label="Travellers" icon={Users}>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      inputMode="numeric"
                      placeholder="No. of persons"
                      value={formData.NoOfPerson}
                      onChange={updateField("NoOfPerson")}
                      className={`${inputClasses} cursor-text`}
                    />
                  </Field>

                  <Field label="Travel Month" icon={CalendarDays}>
                    <input
                      type="text"
                      placeholder="e.g. January"
                      value={formData.Month}
                      onChange={updateField("Month")}
                      className={`${inputClasses} cursor-text`}
                    />
                  </Field>

                </div>

                <Field label="Message" icon={MessageSquare}>
                  <textarea
                    rows="2"
                    placeholder="Any requirements or questions?"
                    value={formData.Message}
                    onChange={updateField("Message")}
                    className={`${inputClasses} resize-none`}
                  />
                </Field>

              </div>

              {/* SUBMIT AREA */}

              <div
                className="
                  mt-3
                  border-t
                  border-gray-100
                  pt-3
                  sm:mt-5
                  sm:pt-4
                "
              >

                <div
                  className="
                    mb-2.5
                    flex
                    items-center
                    gap-1.5
                    text-[9px]
                    text-gray-400
                    sm:mb-3
                    sm:text-[10px]
                  "
                >
                  <ShieldCheck
                    className="
                      h-3
                      w-3
                      sm:h-3.5
                      sm:w-3.5
                    "
                  />

                  <span>
                    Your information is safe with us
                  </span>
                </div>

                {/* SUCCESS MESSAGE */}

                {status === "success" && (
                  <p className="mb-3 text-center text-xs font-medium text-green-600">
                    Your enquiry has been submitted successfully!
                  </p>
                )}

                {/* ERROR MESSAGE */}

                {status === "error" && (
                  <p className="mb-3 text-center text-xs font-medium text-red-600">
                    Failed to submit enquiry. Please try again.
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="
                    flex
                    h-9
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#800E13]
                    px-5
                    text-[11px]
                    font-medium
                    text-white
                    shadow-sm
                    transition-all
                    duration-200
                    hover:bg-[#690b0f]
                    hover:shadow-md
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    sm:h-10
                    sm:text-xs
                  "
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send
                        className="
                          h-3
                          w-3
                          sm:h-3.5
                          sm:w-3.5
                        "
                      />

                      Send Enquiry
                    </>
                  )}
                </button>

              </div>

            </div>

            {/* SELECTED PACKAGE */}

            <div className="lg:sticky lg:top-24">

              <div
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                  sm:rounded-2xl
                "
              >

                {/* PACKAGE HEADER */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-gray-100
                    px-4
                    py-3
                  "
                >

                  <div>
                    <p
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#800E13]
                      "
                    >
                      Your Selection
                    </p>

                    <h3 className="mt-0.5 text-sm font-semibold text-gray-900">
                      Package Selected
                    </h3>
                  </div>

                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[#800E13]/5
                    "
                  >
                    <MapPin className="h-3.5 w-3.5 text-[#800E13]" />
                  </div>

                </div>

                {/* PACKAGE EXISTS */}

                {PackageId ? (
                  <div className="p-4">

                    <div className="relative overflow-hidden rounded-xl">

                      <img
                        src={PackageImage || "/img.jpg"}
                        alt={PackageName || "Selected package"}
                        className="
                          h-40
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          hover:scale-105
                          sm:h-44
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-black/70
                          via-black/10
                          to-transparent
                        "
                      />

                      <div className="absolute bottom-3 left-3 right-3">

                        <p
                          className="
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.18em]
                            text-white/70
                          "
                        >
                          Selected Package
                        </p>

                        <h4 className="mt-0.5 text-lg font-semibold text-white">
                          {PackageName || PackageId}
                        </h4>

                      </div>

                    </div>

                    <div className="mt-3 flex items-center justify-between">

                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-gray-400">
                          Package
                        </p>

                        <p className="mt-0.5 text-xs font-semibold text-gray-800">
                          {PackageId}
                        </p>
                      </div>

                      <span
                        className="
                          rounded-full
                          bg-[#800E13]/5
                          px-2.5
                          py-1
                          text-[9px]
                          font-semibold
                          text-[#800E13]
                        "
                      >
                        Selected
                      </span>

                    </div>

                  </div>
                ) : (

                  /* NO PACKAGE */

                  <div className="px-5 py-8 text-center">

                    <div
                      className="
                        mx-auto
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-gray-50
                      "
                    >
                      <MapPin className="h-4 w-4 text-gray-300" />
                    </div>

                    <p className="mt-3 text-xs font-medium text-gray-500">
                      No package selected
                    </p>

                    <p className="mt-1 text-[10px] text-gray-400">
                      You can still send a general enquiry.
                    </p>

                  </div>
                )}

              </div>

              {/* DESKTOP NOTE */}

              <div className="mt-3 hidden items-center gap-2 px-1 lg:flex">

                <ShieldCheck className="h-3.5 w-3.5 text-gray-300" />

                <p className="text-[10px] leading-relaxed text-gray-400">
                  Our team will contact you to confirm availability
                  and travel details.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
    );
  }

  /* ============================================================
     HOMEPAGE UI
  ============================================================ */

  return (
    <section
      className="
        relative
        z-30
        mx-auto
        -mt-12
        w-full
        max-w-6xl
        px-3
        sm:px-4
      "
    >

      <div
        className="
          overflow-hidden
          rounded-xl
          border
          border-gray-100
          bg-white
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        "
      >

        {/* HEADER */}

        <div
          className="
            flex
            items-center
            border-b
            border-gray-100
            bg-base-200
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
              border-r
              border-gray-100
              bg-gray-50
              px-3
              py-2.5
              text-[#800E13]
              sm:px-5
              sm:py-3
            "
          >

            <Plane className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

            <span className="text-[11px] font-semibold sm:text-xs">
              Book your trip
            </span>

          </div>

          <div className="flex-1" />

          <div
            className="
              hidden
              items-center
              gap-1.5
              pr-5
              sm:flex
            "
          >

            <ShieldCheck className="h-3.5 w-3.5 text-gray-300" />

            <span className="text-[10px] text-gray-400">
              Secure enquiry
            </span>

          </div>

        </div>

        {/* HOMEPAGE FORM CONTENT */}

        <div className="px-3.5 py-4 sm:px-5 sm:py-5">

          {/* HEADING */}

          <div className="mb-3 flex items-center justify-between sm:mb-4">

            <div>

              <h3
                className="
                  text-xl
                  leading-tight
                  font-serif
                  text-[#800E13]
                  sm:text-2xl
                "
              >
                Ready to start your journey?
              </h3>

              <p className="mt-0.5 text-[10px] text-gray-400 sm:text-[11px]">
                Share your details and we&apos;ll get back to you shortly.
              </p>

            </div>

            {PackageId && (
              <span
                className="
                  hidden
                  rounded-full
                  bg-[#800E13]/5
                  px-2.5
                  py-1
                  text-[9px]
                  font-medium
                  text-[#800E13]
                  sm:block
                "
              >
                Package selected
              </span>
            )}

          </div>

          {/* FORM GRID */}

          <div
            className="
              grid
              grid-cols-1
              gap-2
              sm:grid-cols-2
              sm:gap-2.5
              lg:grid-cols-3
            "
          >

            <Field label="Your Name" icon={User}>
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.FullName}
                onChange={updateField("FullName")}
                className={inputClasses}
              />
            </Field>

            <Field label="WhatsApp" icon={Phone}>
              <input
                type="tel"
                placeholder="03XXXXXXXXX"
                value={formData.PhoneNumber}
                onChange={updateField("PhoneNumber")}
                className={inputClasses}
              />
            </Field>

            <Field label="Email" icon={Mail}>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.Email}
                onChange={updateField("Email")}
                className={inputClasses}
              />
            </Field>

            <Field label="Travellers" icon={Users}>
              <input
                type="number"
                min="1"
                placeholder="No. of persons"
                value={formData.NoOfPerson}
                onChange={updateField("NoOfPerson")}
                className={inputClasses}
              />
            </Field>

            <Field label="Travel Month" icon={CalendarDays}>
              <input
                type="month"
                value={formData.Month}
                onChange={updateField("Month")}
                className={inputClasses}
              />
            </Field>

            <Field label="Message" icon={MessageSquare}>
              <input
                type="text"
                placeholder="Any requirements?"
                value={formData.Message}
                onChange={updateField("Message")}
                className={inputClasses}
              />
            </Field>

          </div>

          {/* SUBMIT */}

          <div
            className="
              mt-3
              flex
              flex-col
              gap-3
              border-t
              border-gray-100
              pt-3
              sm:mt-4
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:pt-3
            "
          >

            <div
              className="
                flex
                items-center
                gap-1.5
                text-[9px]
                text-gray-400
                sm:text-[10px]
              "
            >

              <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" />

              <span>
                Your information is safe with us
              </span>

            </div>

            {/* SUCCESS MESSAGE */}

            {status === "success" && (
              <p className="text-center text-xs font-medium text-green-600">
                Your enquiry has been submitted successfully!
              </p>
            )}

            {/* ERROR MESSAGE */}

            {status === "error" && (
              <p className="text-center text-xs font-medium text-red-600">
                Failed to submit enquiry. Please try again.
              </p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="
                flex
                h-9
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#800E13]
                px-5
                text-[11px]
                font-medium
                text-white
                transition-all
                duration-200
                hover:bg-[#690b0f]
                disabled:cursor-not-allowed
                disabled:opacity-60
                sm:w-auto
              "
            >

              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  Send Enquiry
                </>
              )}

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}