const mongoose = require('mongoose');

const papasSchema = mongoose.Schema({
  
    nombre: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true
    }    
});


const Papas = mongoose.model('papas_fritas', papasSchema);

module.exports = Papas;