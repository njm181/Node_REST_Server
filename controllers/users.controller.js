 const { response, request } = require('express');
 
 const getUsers = (req = request, res = response) => {

    const { q, nombre = 'No Name', apikey } = req.query;

    res.json({
        msg: "Get API - Controller",
        q,
        nombre,
        apikey
    });
  }

  const postUsers = (req, res = response) => {
    //Extraer data del body
    const { nombre, edad } = req.body;

    res.json({
        msg: "Post API - Controller",
        nombre,
        edad
    });
  }
  const putUsers = (req, res = response) => {

    const {id} = req.params; //obtener params de la url los mismos estan definidos en las routes

    res.json({
        msg: "Put API - Controller",
        id
    });
  }
  const deleteUsers = (req, res = response) => {
    res.json({
        msg: "Delete API - Controller"
    });
  }

  module.exports = {
      getUsers,
      postUsers,
      putUsers,
      deleteUsers
  }