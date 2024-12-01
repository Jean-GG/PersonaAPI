const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

require("dotenv").config();
const gameRoutes = require('./src/routes/gameRoutes');

const app = express();

app.use(express.json());
app.use("/api/games", gameRoutes);

// Ruta para la documentación de Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    console.log(`Documentación disponible en http://localhost:${PORT}/api/docs`);
});