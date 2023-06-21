// Imports
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const port = process.env.PORT||3000;
const app = express();

// Middlewares
// TODO: Implementar middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('dotenv').config();
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
    res.write(`<div>
        <h1>404 - Ruta no encontrada</h1>
        <hr>
        <p>La pagina que intentas buscar no existe</p>
        <p>Redireccionando a la página de inicio...</p>
        <script>
        (
          () => setTimeout(() => {
            window.location.href='http://localhost:${port}/tareas';
           }, 3000)           
        )();
        </script>
    </h1>`)
});

// Starting the server
app.listen(port, () => console.log(`El servidor escuchando en el puerto ${port}`));