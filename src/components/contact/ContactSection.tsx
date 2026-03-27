"use client";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

const contactInfo = [
  {
    icon: <FaEnvelope calcMode="w-6 h-6" />,
    title: "Emal",
    value: "huanhoccode24@gmail.com",
    link: "mailto:huanhoccode24@gmail.com",
  },
  {
    icon: <FaPhone calcMode="w-6 h-6" />,
    title: "Phone",
    value: "0368535632",
    link: "tel:0368535632",
  },
  {
    icon: <FaMapMarkedAlt calcMode="w-6 h-6" />,
    title: "Location",
    value: "Remote - Global",
    link: "#",
  },
];

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const InputStyles =
    "px-4 py-3.5 my-4 bg-slate-800 outline-none rounded-md w-full text-gray-200 placeholder-gray-400";

  const onSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "bc058792-f4c9-48ae-bdd7-486667255d15");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      (event.target as HTMLFormElement).reset();
      toast("Form submit successfully", {
        style: {
          background: "#4f3f66",
          color: "white",
        },
      });
    } else {
      toast("Error submit form", {
        style: {
          background: "#4f3f66",
          color: "white",
        },
      });
    }
    setLoading(false);

    // console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <section id="contact" className="py-16 lg:py-30">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        {/* contact info */}
        <div data-aos="fade-right">
          <h2
            className="py-3 text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r
           from-indigo-500 to-gray-300"
          >
            Kết nối cùng tôi!
          </h2>
          <p className="text-gray-400 mb-10 text-base lg:text-lg leading-relaxed text-justify">
            Mình luôn chào đón những cơ hội hợp tác mới, từ Freelance đến các vị
            trí Full-time. Nếu bạn có một dự án thú vị hoặc đơn giản là muốn
            giao lưu về công nghệ, hãy kết nối với mình ngay nhé!
          </p>
          <div className="space-y-5 mb-12">
            {contactInfo.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="group flex items-center gap-4 px-2 py-3 transition-colors hover:bg-white/5 rounded-lg"
                >
                  <div className="h-15 w-15 rounded-full bg-white/5 text-white transition-transform group-hover:scale-105 grid place-items-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-md font-medium text-white">
                      {item.title}
                    </h4>
                    <div className="text-md text-gray-200">{item.value}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* form */}
        <div data-aos="zoom-in">
          <form
            onSubmit={onSubmit}
            className="rounded-lg bg-slate-900 px-4 py-8"
          >
            <input
              type="text"
              placeholder="Enter your name"
              className={InputStyles}
              required
              name="name"
            />
            <input
              type="text"
              placeholder="Enter your email"
              className={InputStyles}
              required
              name="email"
            />
            <input
              type="text"
              placeholder="Enter subject for message"
              className={InputStyles}
              required
              name="subject"
            />
            <textarea
              placeholder="Enter message"
              required
              className={`${InputStyles} resize-none`}
              rows={5}
              name="message"
            />
            <button
              className="w-full bg-linear-to-r from-blue-900 to-purple-800 hover:from-blue-500 hover:mask-t-from-taupe-700 text-white font-semibold
            py-4 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending ...
                </>
              ) : (
                <>
                  <LuSend size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
