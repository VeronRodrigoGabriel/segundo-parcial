const Reserva = require("../models/Reserva");

const ctrlReservas = {};


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================
    
// Obtener todas las reservas
// Obtener una reserva
// Crear una reserva
ctrlReservas.crearReserva = async (req, res) => {
    const { Nombre, Apellido,Fecha_Reserva } = req.body;

    try {

        const nuevaReserva = new Reserva({
            Nombre,
            Apellido,
            Fecha,
        });
        const ReservaCreada = await nuevaReserva.save();
        if (!usuarioCreado) {
            throw ({
                message: 'Error al crear el usuario',
            })
        }
        return res.status(201).json({
            message: 'Se realizo un reserva correctamente',
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: 'Error al crear reserva',
        });
    }
};
// Actualizar una reserva
ctrlReservas.actualizarReserva= async (req, res) => {

    const { id } = req.params;

    const { Nombre, Apellido, Fecha_Reserva } = req.body;


    try {

        const ReservaActualizada = await Reserva.update({
            Nombre,
            Apellido,
            Flecha_Reserva
        }, {
            where: {
                id
            }
        })

        if (!ReservaActualizada) {
            throw ({
                status: 400,
                message: 'No se pudo actualizar su reserva'
            })
        }

        return res.json({
            message: 'Reserva actualizada correctamente',
            ReservaActualizada
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: "Hubo un error"
        })
    }


}
// Eliminar una reserva de forma lógica

ctrlReservas.eliminarReserva = async (req, res) => {

    const { id } = req.params

    try {

       
        const ReservaEliminada = Reserva.update({
            estado: false
        }, {
            where: {
                id,
                estado: true
            }
        })


     
        if (!ReservaEliminada) {
            throw ({
                status: 400,
                message: 'Error al eliminar reserva'
            })
        }

        return res.json({
            message: 'Se elimino la reserva',ReservaEliminada
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 5000).json({
            message: 'Error del servidor'
        })
    }

}


module.exports = ctrlReservas;