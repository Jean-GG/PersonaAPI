const gameModel = require("../models/gameModel");

const getGames = async (req, res) => {
  try {
    const games = await gameModel.getGames();
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getGameById = async (req, res) => {
  try {
    const game = await gameModel.getGameById(req.params.id);
    if (!game) return res.status(404).json({ error: "Game not found" });
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createGame = async (req, res) => {
  try {
    const game = await gameModel.createGame(req.body);
    res.status(201).json(game);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateGame = async (req, res) => {
  try {
    const game = await gameModel.updateGame(req.params.id, req.body);
    if (!game) return res.status(404).json({ error: "Game not found" });
    res.json(game);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteGame = async (req, res) => {
  try {
    await gameModel.deleteGame(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getGames, getGameById, createGame, updateGame, deleteGame };
