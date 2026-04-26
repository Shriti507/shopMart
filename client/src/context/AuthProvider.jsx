import React, { useCallback, useEffect, useMemo, useState } from "react";
import * as shopApi from "../services/shopApi";
import { AuthContext } from "./AuthContext.js";

export function AuthProvider({ children }) {
  console.log("AuthProvider initializing...");
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [cartItemCount, setCartItemCount] = useState(0);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken("");
    setUser(null);
    setCartItemCount(0);
  }, []);

  const refreshCartCount = useCallback(async () => {
    const currentToken = localStorage.getItem("token");
    if (!currentToken) {
      setCartItemCount(0);
      return;
    }
    try {
      const cart = await shopApi.getCart();
      const count = (cart.items || []).reduce((s, i) => s + i.quantity, 0);
      setCartItemCount(count);
    } catch (err) {
      if (err && err.isUnauthorized) {
        logout();
      }
      setCartItemCount(0);
    }
  }, [logout]);

  // useEffect(() => {
  //   refreshCartCount();
  // }, [token, refreshCartCount]);

  useEffect(() => {
    const fetchCart = async () => {
      if (token) {
        await refreshCartCount();
      }
    };
    fetchCart();
  }, [token, refreshCartCount]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "token") {
        setToken(e.newValue || "");
      }
      if (e.key === "user") {
        setUser(e.newValue ? JSON.parse(e.newValue) : null);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    shopApi.setUnauthorizedListener(logout);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      shopApi.setUnauthorizedListener(() => {});
    };
  }, [logout]);

  const login = useCallback(async (email, password) => {
    const data = await shopApi.login({ email, password });
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setToken(data.token);
    setUser(data.user);
    return data;
  }, []);

  const register = useCallback(async (payload) => {
    const data = await shopApi.register(payload);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setToken(data.token);
    setUser(data.user);
    return data;
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token),
      login,
      register,
      logout,
      cartItemCount,
      refreshCartCount,
      updateUser: (updatedUser) => {
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
      },
    }),
    [user, token, login, register, logout, cartItemCount, refreshCartCount],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
