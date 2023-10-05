const mongoose = require('mongoose');

const hamburguesasSchema = mongoose.Schema({
  
    nombre: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true
    }    
});


const Hamburguesas = mongoose.model('Hamburguesa', hamburguesasSchema, "hamburguesas");

module.exports = Hamburguesas;