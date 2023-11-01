const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/shopApp");
  console.log("CONNECTION OPEN!");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const productSchema = new mongoose.Schema({
  // 스키마 유효성 검사
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({ name: "Bike", price: 999 });

bike
  .save()
  .then((data) => console.log(data))
  .catch((err) => console.log("error"));
