
export const fetchProducts = async (limit = 6, skip = 0) => {
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    if (!response.ok) {
      throw new Error('Failed to fetch from API');
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('API Service Error:', error);
    throw error;
  }
};
