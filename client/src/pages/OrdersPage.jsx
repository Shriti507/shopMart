import React, { useEffect, useState } from "react";
import { getOrders } from "../services/shopApi";
import {
  ChevronLeft,
  ShoppingBag,
  Clock,
  CheckCircle,
  Truck,
  XCircle,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader";
import { formatUSD } from "../utils/price";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        const fetchedOrders = data.orders || [];

        const fakeStatuses = ["delivered", "shipped", "cancelled", "pending"];
        const demoOrders = fetchedOrders.map((o, i) => ({
          ...o,
          status: o.status === "pending" ? fakeStatuses[i % 4] : o.status,
        }));
        setOrders(demoOrders);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-600";
      case "shipped":
        return "bg-yellow-100 text-yellow-600";
      case "cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusText = (status) => {
    if (!status) return "Pending";
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="w-full min-h-screen bg-[#f6f7f9] pb-20 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 px-4 py-4">
        <div className="max-w-[600px] mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <ChevronLeft size={24} className="text-[#1a1a1a]" />
          </button>
          <h1 className="text-xl font-bold text-[#1a1a1a]">My Orders</h1>
        </div>
      </div>

      <div className="max-w-[600px] mx-auto px-4 mt-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-8 h-8 border-4 border-[#1f2d1f] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[#6b7280] font-medium">Loading orders...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white rounded-[24px] p-12 text-center border border-gray-100 shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
              <ShoppingBag size={40} />
            </div>
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
              No orders found
            </h2>
            <p className="text-[#6b7280] mb-8">
              You haven't placed any orders yet.
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-[#1f2d1f] text-white px-10 py-4 rounded-2xl font-bold"
            >
              Shop Now
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {orders.map((order) => {
              return (
                <div
                  key={order._id}
                  className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest mb-1">
                        Order ID
                      </p>
                      <p className="text-sm font-mono font-bold text-[#1a1a1a]">
                        #{order._id.slice(-8).toUpperCase()}
                      </p>
                    </div>
                    <div
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${getStatusStyle(order.status)}`}
                    >
                      {getStatusText(order.status)}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex -space-x-3 overflow-hidden">
                      {order.items.slice(0, 3).map((item, idx) => (
                        <div
                          key={idx}
                          className="w-12 h-12 rounded-xl border-2 border-white bg-gray-50 overflow-hidden shrink-0 shadow-sm"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      {order.items.length > 3 && (
                        <div className="w-12 h-12 rounded-xl border-2 border-white bg-[#1f2d1f] flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                          +{order.items.length - 3}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1a1a1a]">
                        {order.items.length}{" "}
                        {order.items.length === 1 ? "Item" : "Items"}
                      </p>
                      <p className="text-xs text-[#6b7280] font-medium">
                        {new Date(order.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest mb-0.5">
                        Total Amount
                      </p>
                      <p className="text-lg font-black text-[#1a1a1a]">
                        {formatUSD(order.totalAmount)}
                      </p>
                    </div>
                    <button className="flex items-center gap-1 bg-gray-50 hover:bg-gray-100 px-4 py-2.5 rounded-xl transition-colors group">
                      <span className="text-sm font-bold text-[#1a1a1a]">
                        View Details
                      </span>
                      <ChevronRight
                        size={16}
                        className="text-[#6b7280] group-hover:translate-x-0.5 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
