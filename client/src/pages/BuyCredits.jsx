import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faCheck } from "@fortawesome/free-solid-svg-icons";

const plans = [
  {
    name: "Starter",
    credits: 100,
    price: 10,
    features: ["100 image generations", "Standard quality", "Email support"],
    gradient: "from-blue-600 to-blue-800",
    popular: false,
  },
  {
    name: "Pro",
    credits: 500,
    price: 40,
    features: [
      "500 image generations",
      "HD quality",
      "Priority support",
      "Faster generation",
    ],
    gradient: "from-blue-600 via-purple-600 to-red-600",
    popular: true,
  },
  {
    name: "Ultra",
    credits: 1500,
    price: 100,
    features: [
      "1500 image generations",
      "4K quality",
      "24/7 support",
      "Fastest generation",
      "Early access features",
    ],
    gradient: "from-purple-600 to-red-700",
    popular: false,
  },
];

const BuyCredits = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);

  return (
    <div className="min-h-screen relative px-4 sm:px-10 md:px-14 lg:px-28 pt-28 pb-20">
      <div
        className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-r from-blue-900 via-purple-500 to-red-600 z-0"
        style={{ maskImage: "linear-gradient(to bottom, black 50%, transparent 85%)" }}
      >
        <div
          className="absolute top-0 left-0 h-full w-[30%]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)`,
            backgroundSize: "30px 30px",
            maskImage: "linear-gradient(to right, white 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-[30%]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 2px)`,
            backgroundSize: "30px 30px",
            maskImage: "linear-gradient(to left, white 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="absolute top-[210px] left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black z-10" />

      <div className="relative z-20 text-white">
        <div className="text-center mb-12">
          <p className="py-1 px-3 mb-4 backdrop-blur-sm bg-white/10 rounded-full w-fit mx-auto text-sm">
            <FontAwesomeIcon icon={faCoins} className="mr-2 text-yellow-400" />
            Simple, transparent pricing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            Buy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-400">
              Credits
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Choose a plan that fits your creative needs. Credits never expire.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className={`relative rounded-2xl p-6 cursor-pointer border transition-all duration-300 hover:scale-[1.02] ${
                selected === i
                  ? "border-purple-500 bg-white/10 shadow-lg shadow-purple-900/30"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-600">
                  Most Popular
                </span>
              )}

              <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${plan.gradient} mb-4`}>
                <FontAwesomeIcon icon={faCoins} className="text-white text-xl" />
              </div>

              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-3xl font-bold mb-1">
                ${plan.price}
                <span className="text-sm font-normal text-gray-400"> / one-time</span>
              </p>
              <p className="text-sm text-gray-400 mb-4">
                {plan.credits} credits included
              </p>

              <ul className="flex flex-col gap-2 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <FontAwesomeIcon icon={faCheck} className="text-purple-400 text-xs" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 rounded-xl font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] bg-gradient-to-r ${plan.gradient}`}
              >
                Get {plan.name}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          Secure payment · Credits never expire · Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default BuyCredits;
