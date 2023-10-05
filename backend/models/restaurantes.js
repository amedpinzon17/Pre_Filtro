const mongoose = require('mongoose');

const retauranteSchema = new mongoose.Schema({
  
    nombre: {
        type: String,
        required: true
    },

    tipo: {
        type: String,
        required: true
    },
    
    direccion: {
        type: String,
        required: true
    },
    
    telefono: {
        type: String,
        required: true
    },
    
    horario: {
        type: String,
        required: true
    },

    rating: {
        type: Number,
        required: true
    }    
});


const Restaurantes = mongoose.model('Restaturante', retauranteSchema, 'restaurantes');

module.exports = Restaurantes;