// server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

// 미들웨어
app.use(cors());
app.use(express.json()); // JSON 요청 바디 파싱
app.use("/images", express.static("public/images"));

// 상품 데이터 (임시 DB 역할)
const products = [
  { id: 1, name: "로봇청소기", price: 10000, image: "images/default-product.png", likeCount: 23 },
  { id: 2, name: "식기세척기", price: 12000, image: "images/default-product.png", likeCount: 33 },
  { id: 3, name: "정수기", price: 9000, image: "images/default-product.png", likeCount: 20 },
  { id: 4, name: "갤럭시탭", price: 15000, image: "images/default-product.png", likeCount: 28 },
  { id: 5, name: "아이폰", price: 11000, image: "images/default-product.png", likeCount: 7 },
  { id: 6, name: "세탁기", price: 8000, image: "images/default-product.png", likeCount: 1 },
  { id: 7, name: "냉장고", price: 9500, image: "images/default-product.png", likeCount: 0 },
  { id: 8, name: "스타일러", price: 13000, image: "images/default-product.png", likeCount: 12 },
  { id: 9, name: "침대", price: 7000, image: "images/default-product.png", likeCount: 9 },
  { id: 10, name: "mp3", price: 14000, image: "images/default-product.png", likeCount: 8 },
  { id: 11, name: "cd player", price: 12500, image: "images/default-product.png", likeCount: 7 },
  { id: 12, name: "화장품", price: 10500, image: "images/default-product.png", likeCount: 5 },
  { id: 13, name: "Cosmetic", price: 11500, image: "images/default-product.png", likeCount: 22 },
  { id: 14, name: "Book", price: 13500, image: "images/default-product.png", likeCount: 21 },
  { id: 15, name: "Computer without mouse", price: 9500, image: "images/default-product.png", likeCount: 3 },
];

// 상품 목록 가져오기 (GET)
app.get("/products", (req, res) => {
  const { page = 1, pageSize = 10, sort = "recent", keyword } = req.query;

  let filtered = [...products];

  if (keyword) {
    filtered = filtered.filter((p) => p.name.includes(keyword));
  }

  if (sort === "recent") {
    filtered = filtered.sort((a, b) => b.id - a.id);
  }

  const start = (page - 1) * pageSize;
  const end = start + Number(pageSize);
  const list = filtered.slice(start, end);

  res.json({ totalCount: filtered.length, list });
});

// 상품 등록하기 (POST)
app.post("/products", (req, res) => {
  const { name, description, price, tags } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price,
    tags,
    image: "images/default-product.png",
    likeCount: 0,
  };

  products.push(newProduct);

  console.log(" 상품 등록됨:", newProduct);
  res.status(201).json(newProduct);
});

// 서버 실행 (항상 맨 마지막에 있어야 함!)
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
