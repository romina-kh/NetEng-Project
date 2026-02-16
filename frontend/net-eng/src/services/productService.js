const API_BASE = "http://localhost:8080/api/v1";

export const getServers = async ({ search, category }) => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (category && category !== "all") params.append("category", category);

  const response = await fetch(`${API_BASE}/product/servers?${params}`);

  if (!response.ok) {
    throw new Error("خطا در دریافت محصولات");
  }
  
  return response.json();
};
