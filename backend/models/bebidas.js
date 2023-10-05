const mongoose = require('mongoose');

const bebidasSchema = mongoose.Schema({
  
    nombre: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true
    }    
});


const Bebidas = mongoose.model('Bebida', bebidasSchema, "bebidas");

module.exports = Bebidas;