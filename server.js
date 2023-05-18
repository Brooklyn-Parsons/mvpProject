import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.static("public"));

app.use(express.json());

app.get("/", (_,res) => {
  res.send("hi");
});

app.get("/shrek", (_, res) => {
  db.query("SELECT * FROM characters").then((data) => {
    res.json(data.rows);
  });
});

app.get("/shrek/random", (req, res) => {
  //let id = req.params.id;
  db.query("SELECT * FROM characters ORDER BY RANDOM() LIMIT 1").then((data) => {
    res.json(data.rows);
  });
});




// TODO: Replace 3000 with process.env.PORT
app.listen(4000, () => {
  console.log(`listening on Port ${4000}`);
});