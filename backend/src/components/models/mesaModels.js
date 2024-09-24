import mongoose from "mongoose";


const mesaEsquema = new mongoose.Schema({
    numeroDeMesa: {
        type: Number,
        required: true, 
        unique: true
    },
    asientos: {
        type: Number,
        required: true 
    },
    estado: {
        type: String,
        required: true,
        default: "Libre"
    },
    reserva: {
        type: Date, 
        required: false 
    }
});


export const Mesa = mongoose.model('Mesa', mesaEsquema);