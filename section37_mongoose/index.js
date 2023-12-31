const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/movieApp");
  console.log("CONNECTION OPEN!");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// 스키마 정의
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

// 스키마 모델 만들기
const Movie = mongoose.model("Movie", movieSchema);

// DB 생성
const amadeus = new Movie({
  title: "Amadeus",
  year: 1986,
  score: 9.2,
  rating: "R",
});

Movie.insertMany([
  {
    title: "AAA",
    year: 2000,
    score: 5,
    rating: "PG",
  },
  {
    title: "BBB",
    year: 1986,
    score: 2.2,
    rating: "R",
  },
  {
    title: "CCC",
    year: 1998,
    score: 10,
    rating: "R",
  },
]).then((data) => {
  console.log("IT WORKED!!");
  console.log(data);
});
