import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import groceryImage from "../assets/grocery.jpg";
import { CircleUserRound, Mail, Phone, Lock, Users } from "lucide-react";
import { useAuth } from "../context/useAuth";

const Signup = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "Member",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        isOnline: false,
      };
      if (formData.phone?.trim()) {
        payload.phone = formData.phone.trim();
      }
      await register(payload);
      navigate("/user-dashboard", { replace: true });
    } catch (err) {
      const message =
        err.data?.message || err.response?.data?.message || err.message || "";
      if (
        message.includes("E11000") ||
        message.includes("Phone number already exists")
      ) {
        setError("Phone number already exists");
      } else {
        setError(message || "Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full">
      <div className="w-[55%] hidden md:inline-block">
        <img
          className="h-full w-full object-cover"
          src={groceryImage}
          alt="Signup Visual"
        />
      </div>

      <div className="w-full md:w-[45%] flex flex-col items-center justify-center md:items-start md:pl-24 overflow-y-auto py-10">
        <form
          onSubmit={handleSubmit}
          className="md:w-96 w-80 flex flex-col justify-center"
        >
          <h2 className="text-4xl text-[#847949] font-medium">
            Create Account
          </h2>
          <p className="text-sm text-[#839490] mt-3">
            Fresh groceries and daily essentials, right at your doorstep
          </p>

          {error && (
            <p className="text-red-600 text-sm mt-4 font-medium">{error}</p>
          )}

          <button
            type="button"
            className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full hover:bg-gray-500/20 transition-all"
          >
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
              alt="googleLogo"
            />
          </button>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="text-nowrap text-sm text-[#839490]">or use email</p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-5 gap-3 mb-4">
            <CircleUserRound size={20} className="text-gray-400" />
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="bg-transparent text-gray-700 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-5 gap-3 mb-4">
            <Mail size={20} className="text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="bg-transparent text-gray-700 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-5 gap-3 mb-4">
            <Phone size={20} className="text-gray-400" />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number (Optional)"
              className="bg-transparent text-gray-700 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-5 gap-3 mb-4">
            <Lock size={20} className="text-gray-400" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="bg-transparent text-gray-700 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between px-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-[#839490]">
              <Users size={16} />
              <span>Register as:</span>
            </div>
            <div className="flex gap-4">
              <label className="text-sm text-[#839490] flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="Member"
                  defaultChecked
                  onChange={handleChange}
                  className="accent-[#310E10]"
                />{" "}
                Member
              </label>
              <label className="text-sm text-[#839490] flex items-center gap-1 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="Admin"
                  onChange={handleChange}
                  className="accent-[#310E10]"
                />{" "}
                Admin
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full h-11 rounded-full text-white bg-[#310E10] hover:opacity-90 transition-opacity font-medium disabled:opacity-50"
          >
            {loading ? "Creating account…" : "Sign Up"}
          </button>

          <p className="text-[#839490] text-sm mt-4 text-center md:text-left">
            Already have an account?{" "}
            <Link
              className="text-[#4c1f21] font-semibold hover:underline"
              to="/login"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
