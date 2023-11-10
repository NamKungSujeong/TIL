const Product = require("./models/product");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
  console.log("MONGO CONNECTION OPEN!");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const p = new Product({
  name: "Ruby",
  price: 1.99,
  category: "fruit",
});
p.save().then((p) => console.log(p));
