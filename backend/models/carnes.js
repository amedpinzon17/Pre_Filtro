const mongoose = require('mongoose');

const CarnesSchema = mongoose.Schema({
  
    nombre: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true
    }    
});


const Carnes = mongoose.model('Carne', CarnesSchema, "carnes");

module.exports = Carnes;