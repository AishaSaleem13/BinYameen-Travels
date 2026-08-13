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
} from "lucide-react";

import { Bookingapi } from "../../environment";
const Field = ({ label, icon: Icon, children }) => (
  <div
    className="
      group
      rounded-lg
      border border-gray-200
      bg-white
      px-3
      py-2
      transition-all
      duration-200
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

export default function BookingWidget({ PackageId }) {
  const [formData, setFormData] = useState({
    FullName: "",
    PhoneNumber: "",
    Email: "",
    NoOfPerson: "",
    Month: "",
    Message: "",
    
  });

  const [loading, setLoading] = useState(false);

  const updateField = (key) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
      setLoading(true)
   try{
  
     console.log(formData);

   const res=await fetch(Bookingapi,{
    method:"POST",
    headers:{
       "Content-Type": "application/json",
    },
    body:JSON.stringify(formData)
   })
   const data =await  res.json()
   if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }
 console.log("Booking submitted:", data);
 alert("Your enquiry has been submitted successfully!");

    setFormData({
      FullName: "",
      PhoneNumber: "",
      Email: "",
      NoOfPerson: "",
      Month: "",
      Message: "",
    
    }) 
   }
   catch (error) {
    console.error("Booking error:", error);
    alert("Failed to submit enquiry. Please try again.");
  } finally {
    setLoading(false);
  }
    
  }

  // const Field = ({ label, icon: Icon, children }) => (
  //   <div
  //     className="
  //       group
  //       rounded-lg
  //       border border-gray-200
  //       bg-white
  //       px-3
  //       py-2
  //       transition-all
  //       duration-200
  //       hover:border-gray-300
  //       focus-within:border-[#800E13]/50
  //     "
  //   >
  //     <div className="mb-0.5 flex items-center gap-1.5">
  //       <Icon className="h-3.5 w-3.5 text-gray-400 transition-colors group-focus-within:text-[#800E13]" />

  //       <label className="text-[10px] font-medium text-gray-400">
  //         {label}
  //       </label>
  //     </div>

  //     {children}
  //   </div>
  // );

  const inputClasses =
    "w-full bg-transparent text-[12px] text-gray-700 outline-none placeholder:text-gray-400";

  return (
    <section className="relative z-30 mx-auto -mt-12 w-full max-w-6xl px-4">

      {/* ================= BOOKING CARD ================= */}

      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">

        {/* ================= SMALL TAB ================= */}

        <div className="flex items-center border-b border-gray-100 bg-base-200">

          <div
            className="
              flex
              items-center
              gap-2
              border-r
              border-gray-100
              bg-gray-50
              px-5
              py-3
              text-[#800E13]
            "
          >
            <Plane className="h-4 w-4" />

            <span className="text-xs font-semibold">
              Book your trip
            </span>
          </div>

          <div className="flex-1" />

          <div className="hidden items-center gap-1.5 pr-5 sm:flex">
            <ShieldCheck className="h-3.5 w-3.5 text-gray-300" />

            <span className="text-[10px] text-gray-400">
              Secure enquiry
            </span>
          </div>

        </div>

        {/* ================= FORM ================= */}

        <div className="px-5 py-5">

          {/* tiny heading */}

          <div className="mb-4 flex items-center justify-between">

            <div>
              <h3 className="text-2xl font-serif text-[#800E13]">
                Ready to start your journey?
              </h3>

              <p className="mt-0.5 text-[11px] text-gray-400">
                Share your details and we'll get back to you shortly.
              </p>
            </div>

            {PackageId && (
              <span className="hidden rounded-full bg-[#800E13]/5 px-2.5 py-1 text-[9px] font-medium text-[#800E13] sm:block">
                Package selected
              </span>
            )}

          </div>

          {/* ================= FIELDS ================= */}

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">

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

          {/* ================= BOTTOM ================= */}

          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">

            <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Your information is safe with us</span>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="
                flex
                h-9
                items-center
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
                disabled:opacity-60
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