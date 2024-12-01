const express = require("express");
const gameController = require("../controllers/gameController");

const router = express.Router();

router.get("/", gameController.getGames);
router.get("/:id", gameController.getGameById);
router.post("/", gameController.createGame);
router.put("/:id", gameController.updateGame);
router.delete("/:id", gameController.deleteGame);

module.exports = router;
