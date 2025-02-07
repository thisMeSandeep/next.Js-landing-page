"use client";

import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[linear-gradient(to_bottom,#5D2CA8_0%,#000_100%)] py-[72px] sm:py-24 text-white">
      <div className="container">
        <h1 className="text-6xl font-bold text-center tracking-tighter">
          Frequently asked questions
        </h1>
        {/* faqs */}
        <div className="mt-12 max-w-2xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="py-7 border-b border-b-white/30 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{item.question}</span>
                {openIndex === index ? <MinusIcon /> : <PlusIcon />}
              </div>
              <div
                className={`${
                  openIndex === index ? "block" : "hidden"
                } mt-2 text-sm text-white/70`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
