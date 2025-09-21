import axios from "axios";

const api = axios.create({
    baseURL: "https://panda-market-api.vercel.app",
});

export async function getProductList({ page, pageSize, orderBy, keyword} = {}) {
    try {
        const res = await api.get("/products", { params: { page, pageSize, orderBy, keyword} });
        const data = res.data;
        const totalPages = data.totalCount
        ? Math.ceil(data.totalCount / pageSize)
        : 1;
        return {...data, totalPages };
    } catch (err) {
        console.error("getProductList error:", err.response?.status, err.response?.data);
    }
}

export async function getProduct(id) {
    try {
    const res = await api.get(`/products/${id}`);
    console.log("Product:", res.data);
    return res.data;
    } catch (err) {
    console.error("getProduct error:", err.response?.status, err.response?.data);
    }
}

export async function createProduct({ name, description, price, tags, images }) {
    try {
    const res = await api.post("/products", { name, description, price, tags, images });
    console.log("Product Created:", res.data);
    return res.data;
    } catch (err) {
    console.error("createProduct error:", err.response?.status, err.response?.data);
    }
}

export async function patchProduct(id, params) {
    try {
    const res = await api.patch(`/products/${id}`, params);
    console.log("Product Updated:", res.data);
    return res.data;
    } catch (err) {
    console.error("patchProduct error:", err.response?.status, err.response?.data);
    }
}

export async function deleteProduct(id) {
    try {
    const res = await api.delete(`/products/${id}`);
    console.log("Product Deleted:", res.data);
    return res.data;
    } catch (err) {
    console.error("deleteProduct error:", err.response?.status, err.response?.data);
    }
}
