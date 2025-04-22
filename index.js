import mongoose from "mongoose";
import path from "path";
import { empData } from "./models/dataSchema.js";
import express from "express";

mongoose.connect("mongodb://localhost:27017/EmployeesData");

const app = express();
const port = 3001;

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));
app.use(express.static(path.join(path.resolve(), "views"))); 

let nameObj = {
  0: "Naveen",
  1: "Ram",
  2: "Shyam",
  3: "Martin",
  4: "Virat",
  5: "Rohit",
  6: "Mohit",
  7: "Shobit",
  8: "Nakshatra",
  9: "Mirvan",
};
let salaryObj = {
  0: 500000,
  1: 600000,
  2: 1000000,
  3: 15000000,
  4: 1600000,
  5: 56562528,
  6: 342344234,
  7: 342344132,
  8: 654534342,
  9: 254654223,
};
let languageObj = {
  0: "Python",
  1: "Rust",
  2: "Go",
  3: "React",
  4: "Java",
  5: "Flutter",
  6: "Django",
  7: "Flask",
  8: "Android",
  9: "Kotlin",
};
let cityObj = {
  0: "Pune",
  1: "Mumbai",
  2: "Nashik",
  3: "Nagpur",
  4: "Lucknow",
  5: "Telangana",
  6: "Bengaluru",
  7: "Kerala",
  8: "Japan",
  9: "Korea",
};
let isManager = { 0: true, 1: false };

const generateRandomData = () => Math.floor(Math.random() * 10);
const boolRandom = () => Math.floor(Math.random() * 2);

app.get("/", (req, res) => {
  res.render("index"); 
});

app.get("/generate", async (req, res) => {
  await empData.deleteMany({}); 

  let employees = [];

  for (let i = 0; i < 10; i++) {
    let randomIndex = generateRandomData();
    let e = await empData.create({
      Name: nameObj[randomIndex],
      Salary: salaryObj[randomIndex],
      Language: languageObj[randomIndex],
      City: cityObj[randomIndex],
      isManager: isManager[boolRandom()],
    });
    employees.push(e);
  }

  res.json(employees); 
});

app.get('/index', (req, res)=>{
  res.render('index');
})

app.get('/about', (req, res)=>{
  res.render('about');
})

app.get('/contact', (req, res)=>{
  res.render('contact');
})

app.get('/privacy', (req, res)=>{
  res.render('privacy');
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
