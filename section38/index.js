const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

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

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.send("ALL PRODUCTS WILL BE HERE!!");
});

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000");
});
