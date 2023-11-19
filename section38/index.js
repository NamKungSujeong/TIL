const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// 내보내기 한 Product 모델 연결
const Product = require("./models/product");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
  console.log("MONGO CONNECTION OPEN!");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "dairy"];

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

app.get("/products/new", (req, res) => {
  res.render("/products/new", { categories });
});

// 입력한 정보를 받을
app.post("/products", async (req, res) => {
  // 받은 정보로 새로운 모델 생성
  const newProduct = new Product(req.body);
  // 저장
  await newProduct.save();
  // res.send("making your prodict");
  res.redirect(`/products/${newProduct._id}`);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("/products/show", { product });
});

// 업데이트
app.get("/product/:id/edit", async (req, res) => {
  const { id } = req.params;
  const prodcut = await Product.findById(id);
  res.render("products/edit", { prodcut });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  res.redirect(`/products/${product._id}`);
});

// 삭제

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProduct = Product.findByIdAndDelete(id);
  res.redirect("/products");
});

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000");
});
