const {response ,request} = require('express');

const usuarioGet = (req  = request,  resp = response)=> {
    const {id ,nombre = 'sin nombre ', apiKey , limit } = req.query;
    resp.json({
        msg: ' get API - controllers'
    });
  }

const usuarioPost = (req,  resp = response)=> {
    const {nombre , id} = req.body;
    resp.json({
        msg: ' post API - controllers',
        nombre,
        id
    });
  }

const usuarioPut = (req = request,  resp = response)=> {
    const id = req.params.id;
    resp.json({
        msg: ' put API - controllers'
    });
  }

const usuarioPatch = (req,  resp = response)=> {
    resp.json({
        msg: ' patch API - controllers'
    });
  }

  const usuarioDelete = (req,  resp = response)=> {
    resp.json({
        msg: ' delete API - controllers'
    });
  }

  module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
  }