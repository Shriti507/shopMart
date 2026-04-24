import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  Plus,
  Trash2,
  Home,
  Briefcase,
  Map,
  Loader2,
  Edit3,
  X,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
} from "../services/shopApi";

const AddressesPage = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    isDefault: false,
  });

  const fetchAddresses = async () => {
    try {
      const data = await getAddresses();
      setAddresses(data.addresses || []);
    } catch (err) {
      console.error("Failed to fetch addresses:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const handleEdit = (addr) => {
    setEditingId(addr._id);
    setFormData({
      fullName: addr.fullName,
      phone: addr.phone,
      street: addr.street,
      city: addr.city,
      state: addr.state,
      pincode: addr.pincode,
      isDefault: addr.isDefault,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this address?"))
      return;
    try {
      await deleteAddress(id);
      setAddresses(addresses.filter((a) => a._id !== id));
    } catch {
      alert("Failed to delete address");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editingId) {
        const response = await updateAddress(editingId, formData);
        setAddresses(response.addresses);
      } else {
        const response = await addAddress(formData);
        setAddresses(response.addresses);
      }
      resetForm();
    } catch (err) {
      alert(err.message || "Operation failed");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      fullName: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      isDefault: false,
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#f6f7f9] pb-20 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 px-4 py-4">
        <div className="max-w-[600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-50 rounded-full transition-colors"
            >
              <ChevronLeft size={24} className="text-[#1a1a1a]" />
            </button>
            <h1 className="text-xl font-bold text-[#1a1a1a]">My Addresses</h1>
          </div>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-1.5 bg-[#1f2d1f] text-white px-4 py-2 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-sm"
            >
              <Plus size={18} />
              <span>Add Address</span>
            </button>
          )}
        </div>
      </div>

      <div className="max-w-[600px] mx-auto px-4 mt-6">
        {showForm ? (
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#1a1a1a]">
                {editingId ? "Edit Address" : "Add New Address"}
              </h2>
              <button
                onClick={resetForm}
                className="p-2 text-gray-400 hover:bg-gray-50 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputGroup
                  label="Full Name"
                  value={formData.fullName}
                  onChange={(v) => setFormData({ ...formData, fullName: v })}
                  placeholder="Receiver's name"
                />
                <InputGroup
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(v) => setFormData({ ...formData, phone: v })}
                  placeholder="10-digit number"
                  type="tel"
                />
              </div>
              <InputGroup
                label="Street / House No."
                value={formData.street}
                onChange={(v) => setFormData({ ...formData, street: v })}
                placeholder="Street, Landmark, Apartment"
              />
              <div className="grid grid-cols-2 gap-4">
                <InputGroup
                  label="City"
                  value={formData.city}
                  onChange={(v) => setFormData({ ...formData, city: v })}
                  placeholder="City"
                />
                <InputGroup
                  label="State"
                  value={formData.state}
                  onChange={(v) => setFormData({ ...formData, state: v })}
                  placeholder="State"
                />
              </div>
              <InputGroup
                label="Pincode"
                value={formData.pincode}
                onChange={(v) => setFormData({ ...formData, pincode: v })}
                placeholder="6-digit PIN"
                type="number"
              />

              <div className="flex items-center gap-3 mt-2">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, isDefault: !formData.isDefault })
                  }
                  className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors border ${formData.isDefault ? "bg-[#1f2d1f] border-[#1f2d1f] text-white" : "bg-gray-100 border-gray-200 text-transparent"}`}
                >
                  <Check size={16} strokeWidth={3} />
                </button>
                <span className="text-sm font-bold text-[#6b7280]">
                  Set as default address
                </span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-4 bg-[#1f2d1f] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {submitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : editingId ? (
                  "Update Address"
                ) : (
                  "Save Address"
                )}
              </button>
            </form>
          </div>
        ) : loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="animate-spin text-[#1f2d1f]" size={32} />
            <p className="text-[#6b7280] font-medium">Fetching addresses...</p>
          </div>
        ) : addresses.length === 0 ? (
          <div className="bg-white rounded-[24px] p-12 text-center border border-gray-100 shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
              <Map size={40} />
            </div>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
              No addresses yet
            </h2>
            <p className="text-[#6b7280] mb-8 max-w-[300px] mx-auto">
              Please add a delivery address to continue.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#1f2d1f] text-white px-10 py-4 rounded-2xl font-bold hover:opacity-90 shadow-sm"
            >
              Add Address
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {addresses.map((addr) => (
              <div
                key={addr._id}
                className={`bg-white rounded-[24px] p-6 shadow-sm border transition-all ${addr.isDefault ? "border-[#1f2d1f] ring-2 ring-[#1f2d1f]/5" : "border-gray-100"}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-[#1a1a1a]">
                        {addr.fullName}
                      </h3>
                      {addr.isDefault && (
                        <span className="text-[10px] bg-[#1f2d1f]/10 text-[#1f2d1f] px-2 py-0.5 rounded-full font-bold uppercase">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#6b7280] leading-relaxed mb-1">
                      {addr.street}
                    </p>
                    <p className="text-sm text-[#6b7280] font-medium">
                      {addr.city}, {addr.state} - {addr.pincode}
                    </p>
                    <p className="text-sm text-[#1a1a1a] font-bold mt-2">
                      {addr.phone}
                    </p>

                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-50">
                      <button
                        onClick={() => handleEdit(addr)}
                        className="text-sm font-bold text-[#1f2d1f] flex items-center gap-1.5 hover:underline"
                      >
                        <Edit3 size={16} /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(addr._id)}
                        className="text-sm font-bold text-red-500 flex items-center gap-1.5 hover:underline"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  </div>
                  {addr.isDefault && (
                    <div className="w-6 h-6 rounded-full bg-[#1f2d1f] flex items-center justify-center text-white shadow-sm shadow-[#1f2d1f]/20">
                      <Check size={14} strokeWidth={4} />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <p className="text-center text-xs font-bold text-[#6b7280] uppercase tracking-widest mt-4">
              Default address will be used for deliveries
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const InputGroup = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-bold text-[#6b7280] ml-1 uppercase tracking-wider">
      {label}
    </label>
    <input
      required
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-[#1f2d1f] transition-colors font-medium text-[#1a1a1a]"
      placeholder={placeholder}
    />
  </div>
);

export default AddressesPage;
