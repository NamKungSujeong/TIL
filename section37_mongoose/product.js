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
    maxlength: 20,
  },
  price: {
    type: Number,
  },
  onSale: {
    type: Boolean,
    // 기본 값 넣어주기
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({ name: "Bike", price: 999 });

// save 바로 실행 가능
bike
  .save()
  .then((data) => console.log(data))
  .catch((err) => console.log("error"));
