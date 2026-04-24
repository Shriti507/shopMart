import React, { useState } from "react";
import { ChevronLeft, User, Phone, Save, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { updateProfile } from "../services/shopApi";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await updateProfile(formData);
      updateUser(response.user);
      setSuccess(true);
      setTimeout(() => navigate("/profile"), 1500);
    } catch (err) {
      setError(err.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f6f7f9] font-sans pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 px-4 py-4">
        <div className="max-w-[600px] mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <ChevronLeft size={24} className="text-[#1a1a1a]" />
          </button>
          <h1 className="text-xl font-bold text-[#1a1a1a]">Edit Profile</h1>
        </div>
      </div>

      <div className="max-w-[600px] mx-auto px-4 mt-8">
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-bold border border-red-100">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl text-sm font-bold border border-emerald-100 text-center">
                Profile updated successfully!
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[#6b7280] ml-1 uppercase tracking-wider">
                Full Name
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 focus-within:border-[#1f2d1f] transition-colors group">
                <User
                  size={20}
                  className="text-gray-400 mr-3 group-focus-within:text-[#1f2d1f] transition-colors"
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-transparent outline-none w-full text-[#1a1a1a] font-bold"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[#6b7280] ml-1 uppercase tracking-wider">
                Phone Number
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 focus-within:border-[#1f2d1f] transition-colors group">
                <Phone
                  size={20}
                  className="text-gray-400 mr-3 group-focus-within:text-[#1f2d1f] transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="bg-transparent outline-none w-full text-[#1a1a1a] font-bold"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-[#1f2d1f] text-white py-5 rounded-[20px] font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-[#1f2d1f]/10 disabled:opacity-70 active:scale-95"
            >
              {loading ? (
                <Loader2 size={24} className="animate-spin" />
              ) : (
                <>
                  <Save size={20} />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
