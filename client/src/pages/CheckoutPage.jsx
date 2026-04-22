import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/dashboard/Header";
import Footer from "../components/Footer";
import * as shopApi from "../services/shopApi";
import { useAuth } from "../context/AuthContext";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, refreshCartCount } = useAuth();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/checkout" } });
    }
  }, [isAuthenticated, navigate]);

  const placeOrder = async () => {
    setSubmitting(true);
    setError("");
    setMessage("");
    try {
      await shopApi.createOrder();
      setMessage("Order placed successfully.");
      await refreshCartCount();
      setTimeout(() => navigate("/user-dashboard"), 2000);
    } catch (e) {
      setError(e.message || "Checkout failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="w-full bg-gray-100 min-h-screen text-gray-900 font-sans flex flex-col">
      <Header />
      <main className="max-w-lg mx-auto w-full px-6 py-10 flex-1">
        <h1 className="text-2xl font-extrabold text-[#1b2316] mb-4">Checkout</h1>
        <p className="text-gray-600 text-sm mb-8">
          Pay on delivery (COD). Click below to confirm your order using your
          current cart.
        </p>
        {error && (
          <p className="text-red-600 text-sm font-medium mb-4">{error}</p>
        )}
        {message && (
          <p className="text-green-700 text-sm font-bold mb-4">{message}</p>
        )}
        <button
          type="button"
          disabled={submitting}
          onClick={placeOrder}
          className="w-full py-3 rounded-xl bg-[#dac889] text-[#1b2316] font-black hover:bg-[#cbb671] disabled:opacity-50 transition-colors"
        >
          {submitting ? "Placing order…" : "Place order"}
        </button>
        <button
          type="button"
          onClick={() => navigate("/cart")}
          className="w-full mt-3 py-2 text-sm font-semibold text-gray-600 hover:text-[#1b2316]"
        >
          Back to cart
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
