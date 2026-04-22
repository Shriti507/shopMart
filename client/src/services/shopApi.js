let unauthorizedListener = () => {};

export const setUnauthorizedListener = (fn) => {
  unauthorizedListener = fn;
};

const apiFetch = async (path, options = {}) => {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(path, { ...options, headers });
  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { message: text || "Invalid response" };
  }
  if (!res.ok) {
    const err = new Error(data?.message || res.statusText);
    err.status = res.status;
    err.data = data;
    if (res.status === 401) {
      err.isUnauthorized = true;
      unauthorizedListener();
    }
    throw err;
  }
  return data;
};

export const register = (body) =>
  apiFetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(body),
  });

export const login = (body) =>
  apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(body),
  });

export const getCart = () => apiFetch("/api/cart");

export const addToCart = (body) =>
  apiFetch("/api/cart/add", {
    method: "POST",
    body: JSON.stringify(body),
  });

export const updateCartItem = (productId, quantity) =>
  apiFetch("/api/cart/item", {
    method: "PUT",
    body: JSON.stringify({ productId, quantity }),
  });

export const removeCartItem = (productId) =>
  apiFetch(`/api/cart/item/${encodeURIComponent(productId)}`, {
    method: "DELETE",
  });

export const clearCart = () =>
  apiFetch("/api/cart", {
    method: "DELETE",
  });

export const createOrder = () =>
  apiFetch("/api/order/create", {
    method: "POST",
    body: JSON.stringify({}),
  });
