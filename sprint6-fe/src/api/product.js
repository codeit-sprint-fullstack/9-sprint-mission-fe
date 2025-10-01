export const createProduct = async (productData) => {
  const response = await fetch("http://localhost:4000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error("상품 등록 실패");
  }

  return await response.json(); 
};