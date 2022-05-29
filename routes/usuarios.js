const {Router} = require('express');
const { usuarioGet, usuarioPost, usuarioPatch, usuarioDelete, usuarioPut } = require('../controllers/usuarioController');

 const router = Router()
 
 router.get('/',  usuarioGet);

 router.post('/', usuarioPost);

 router.put('/:id', usuarioPut);
 
 router.patch('/', usuarioPatch);
  
 router.delete('/', usuarioDelete);


  module.exports = router;