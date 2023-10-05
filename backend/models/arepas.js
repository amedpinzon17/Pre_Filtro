const mongoose = require('mongoose');

const arepasSchema = new mongoose.Schema({
  
    nombre: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true
    }    
});


const Arepas = mongoose.model('Arepa', arepasSchema, "arepas");

module.exports = Arepas;