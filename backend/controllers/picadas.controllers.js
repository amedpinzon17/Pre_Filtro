const express = require('express');
const Picadas = require('../models/picadas.js');




const getPicadas = async (req, res) => {
  try {
    const arepitas = await Picadas.find();
    res.json(arepitas);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
};


const postPicadas = async (req, res) => {
  try {
    const nuevaArepa = await Picadas.create(req.body);
    res.status(201).json(nuevaArepa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Error en el post' });
  }
};





 const deletePicadas = async (req, res) => {
    try {
      const ReservaId = req.params.id;
      const result = await Picadas.findByIdAndDelete(ReservaId);
  
      if (!result) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json({ mensaje: 'Dato eliminado correctamente' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al eliminar el Dato' });
    }
  };




const putPicadas = async (req, res) => {
    try{
        const clienteId = req.params.id;
        const nuevaInfo = req.body;
        const result = await Picadas.findByIdAndUpdate(clienteId, nuevaInfo, {
            new: true,
        }) 
        if(!result){
            return res.status(404).json({ message: 'Dato no encontrado'});
        }

        res.status(200).json(result);
    }catch(err){
        console.error(err.message);
        res.status(500).json({ err: 'Error al editar la info'})
    }
}


module.exports = {
    getPicadas,
    putPicadas,
    deletePicadas,
    postPicadas
}