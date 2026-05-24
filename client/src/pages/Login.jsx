import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);

  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name: form.name || "User", email: form.email });
    navigate("/");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">
      <div
        className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-blue-900 via-purple-700 to-red-700 z-0"
        style={{ maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)" }}
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

      <div className="absolute top-[40%] left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black z-10" />

      <div className="relative z-20 w-full max-w-md">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 justify-center mb-8 cursor-pointer"
        >
          <img src={images.logo} alt="Logo" className="h-9 w-9" />
          <p className="text-2xl font-bold">Liora.Ai</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-1">
            {isSignup ? "Create account" : "Welcome back"}
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">
            {isSignup
              ? "Sign up to start generating images"
              : "Log in to continue with Liora.Ai"}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {isSignup && (
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 outline-none focus:border-purple-500 transition"
                />
              </div>
            )}

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 outline-none focus:border-purple-500 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 outline-none focus:border-purple-500 transition"
              />
            </div>

            {!isSignup && (
              <p className="text-right text-xs text-gray-400 hover:text-purple-400 cursor-pointer transition">
                Forgot password?
              </p>
            )}

            <button
              type="submit"
              className="mt-2 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:opacity-90 transition-all duration-300 hover:scale-[1.02]"
            >
              {isSignup ? "Create account" : "Login"} ✨
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-5">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              onClick={() => setIsSignup(!isSignup)}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 cursor-pointer font-medium hover:opacity-80 transition"
            >
              {isSignup ? "Login" : "Sign up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
