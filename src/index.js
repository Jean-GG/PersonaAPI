const express = require("express");
const cors = require("cors");
require("dotenv").config();

const gameRoutes = require("./src/routes/gameRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/games", gameRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));