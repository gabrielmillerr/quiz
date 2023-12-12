const conectarDatabase = require("./database/conectarDatabase");
const dotenv = require('dotenv');

const express = require("express");
const cors = require("cors");
const routes = require("./routes")

const app = express();
dotenv.config()

const PORT = 3333

app.use(cors());
app.use(express.json());
app.use(routes)

conectarDatabase();

app.listen(PORT, () => {console.log("Server on fire 🔥")});