const mongoose = require('mongoose');

const comboSchema = new mongoose.Schema({
  
    descripcion: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true
    },

    comida: {
        type: String,
        required: true
    },    

    bebida: {
        type: String,
        required: true
    }  
});


const Combos = mongoose.model('Combo', comboSchema, 'combos');

module.exports = Combos;