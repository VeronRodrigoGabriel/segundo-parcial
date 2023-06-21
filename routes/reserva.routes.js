// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const {
    obtenerReservas,
    eliminarReserva,
    actualizarReserva
} = require("../controllers/reserva.controllers")

// ==========================================
//         Rutas para renderizar vistas
// ==========================================
router.get('/CrearReserva', async (req, res) => {
    return res.render('/views/crearReserva.ejs');
});

router.get('/EliminarReserva', async (req, res) => {
    return res.render('/views/eliminarReserva.ejs');
});

router.get('/actualizarReserva', async (req, res) => {
    return res.render('/views/actualizarReserva.ejs', { id: req.params.userId });
});
// Obtener todas las reservas

// Formulario para crear una reserva

// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/', );
 
// Crear una reserva
router.post('/api/',);
 
// Actualizar una reserva
router.put('/api/:id',);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id',);


 module.exports = router;