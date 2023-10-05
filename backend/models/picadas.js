const mongoose = require('mongoose');

const picadasSchema = new mongoose.Schema({
  
    nombre: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true
    }    
});


const Picadas = mongoose.model('picadas', picadasSchema);

module.exports = Picadas;