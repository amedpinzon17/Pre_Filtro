const express = require('express');
const Restaurantes = require('../models/restaurantes.js');




const getRestaurantes = async (req, res) => {
  try {
    const arepitas = await Restaurantes.find();
    res.json(arepitas);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los datos.' });
  }
};


const postRestaurantes = async (req, res) => {
  try {
    const nuevaArepa = await Restaurantes.create(req.body);
    res.status(201).json(nuevaArepa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Error en el post' });
  }
};





 const deleteRestaurantes = async (req, res) => {
    try {
      const ReservaId = req.params.id;
      const result = await Restaurantes.findByIdAndDelete(ReservaId);
  
      if (!result) {
        return res.status(404).json({ mensaje: 'Dato no encontrado' });
      }
      res.status(200).json({ mensaje: 'Dato eliminado correctamente' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Error al eliminar el Dato' });
    }
  };




const putRestaurantes = async (req, res) => {
    try{
        const clienteId = req.params.id;
        const nuevaInfo = req.body;

      console.log(clienteId);

        const result = await Restaurantes.findByIdAndUpdate(clienteId, nuevaInfo, {
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
    getRestaurantes,
    putRestaurantes,
    deleteRestaurantes,
    postRestaurantes
}