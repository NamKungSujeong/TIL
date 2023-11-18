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
    min: [0, "가격은 양수여야합니다."],
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
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

const bike = new Product({ name: "Bike", price: 999 });

// save 바로 실행 가능
bike
  .save()
  .then((data) => console.log(data))
  .catch((err) => console.log("error"));

// Product.findOneAndUpdate(
//   { name: "Bike" },
//   { price: -10 },
//   { new: true, runValidators: true }
// ).then((data) => console.log(data).catch((err) => console.log(err)));
// price에 음수값이 들어갔는데도 작동을 함
// 뭔가를 만들면 유효성 검사가 자동으로 적용되는데 그게 업데이트되고 나서는
// 안되기 때문에 Mongoose한테 계속 유효성 검사를 적용하라고 얘기해줘야 함
// runValidators 옵션을 true로 넣어주기

productSchema.methods.greet = function () {
  console.log("HELLLO!!! HI!! HOWDY!!! ");
  console.log(`- from ${this.name}`);
};

const find = async () => {
  const fidnProduct = await this.find();
  fidnProduct.greet();
};

// 인스턴스 메서드
productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  // 저장 시키기
  return this.save();
};

productSchema.methods.addCategory = function () {
  this.categories.push("outdoor");
  return this.save();
};

// 정적 메서드
productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};
// 여기에서는 this가 모델을 의미

const Product = mongoose.model("Product", productSchema);

// Product.fireSale().then((res) => console.log(res));
