const pool = require("./db");

const getGames = async () => {
  const result = await pool.query("SELECT * FROM persona_games");
  return result.rows;
};

const getGameById = async (id) => {
  const result = await pool.query("SELECT * FROM persona_games WHERE id = $1", [id]);
  return result.rows[0];
};

const createGame = async (game) => {
  const { name, release_year, platform, description } = game;
  const result = await pool.query(
    "INSERT INTO persona_games (name, release_year, platform, description) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, release_year, platform, description]
  );
  return result.rows[0];
};

const updateGame = async (id, game) => {
  const { name, release_year, platform, description } = game;
  const result = await pool.query(
    "UPDATE persona_games SET name = $1, release_year = $2, platform = $3, description = $4 WHERE id = $5 RETURNING *",
    [name, release_year, platform, description, id]
  );
  return result.rows[0];
};

const deleteGame = async (id) => {
  await pool.query("DELETE FROM persona_games WHERE id = $1", [id]);
};

module.exports = { getGames, getGameById, createGame, updateGame, deleteGame };
