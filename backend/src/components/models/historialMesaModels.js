const mongoose = requiere('mongoose');

const historialMesaSchema = new mongoose.Schema({
    numeroDeMesa:{
        type: Number,
        required: true
    },
    estadoAnterior: {
        type: String,
        required: true
    },
    nuevoEstado : {
        type: String,
        required: true
    },
    fechaCambio:{
        type: Date,
        default: Date.now
    },
    datelles : {
        type: String,
        required : false
    }

});

const HistorialMesa = mongoose.model('HistorialMesa', historialMesSchema)

module.exports = HistoriaalMesa;