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

  console.log(`[API] Calling: ${path}`);

  let res;
  try {
    res = await fetch(path, { ...options, headers });

  } catch (err) {
    console.error("Network error:", err);
    throw new Error("Unable to connect to the server. Please check your internet connection.");
  }

  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch (err) {
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
  apiFetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
    method: "POST",
    body: JSON.stringify(body),
  });

export const login = (body) =>
  apiFetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(body),
  });


export const getCart = () => apiFetch(`${import.meta.env.VITE_API_URL}/api/cart`);

export const addToCart = (body) =>
  apiFetch(`${import.meta.env.VITE_API_URL}/api/cart/add`, {
    method: "POST",
    body: JSON.stringify(body),
  });

export const updateCartItem = (productId, quantity) =>
  apiFetch(`${import.meta.env.VITE_API_URL}/api/cart/item`, {
    method: "PUT",
    body: JSON.stringify({ productId, quantity }),
  });


export const removeCartItem = (productId) =>
  apiFetch(`${import.meta.env.VITE_API_URL}/api/cart/item/${encodeURIComponent(productId)}`, {
    method: "DELETE",
  });

export const clearCart = () =>
  apiFetch(`${import.meta.env.VITE_API_URL}/api/cart`, {
    method: "DELETE",
  });


export const createOrder = () =>
  apiFetch(`${import.meta.env.VITE_API_URL}/api/order/create`, {
    method: "POST",
    body: JSON.stringify({}),
  });

export const getOrders = () => apiFetch(`${import.meta.env.VITE_API_URL}/api/order`);

// User Profile
export const getProfile = () => apiFetch(`${import.meta.env.VITE_API_URL}/api/user/profile`);
export const updateProfile = (body) =>
  apiFetch(`${import.meta.env.VITE_API_URL}/api/user/profile`, {
    method: "PUT",
    body: JSON.stringify(body),
  });


// Addresses
export const getAddresses = () => apiFetch(`${import.meta.env.VITE_API_URL}/api/user/addresses`);
export const addAddress = (body) =>
  apiFetch(`${import.meta.env.VITE_API_URL}/api/user/addresses`, {
    method: "POST",
    body: JSON.stringify(body),
  });
export const updateAddress = (id, body) =>
  apiFetch(`${import.meta.env.VITE_API_URL}/api/user/addresses/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
export const deleteAddress = (id) =>
  apiFetch(`${import.meta.env.VITE_API_URL}/api/user/addresses/${id}`, {
    method: "DELETE",
  });

