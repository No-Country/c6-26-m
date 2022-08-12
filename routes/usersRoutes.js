const express = require('express');

// Middlewares
const {
  userExists,
  protectToken,
  protectAccountOwner,
} = require('../middlewares/usersMiddlewares');

//validaciones para el usuario
const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validationsMiddlewares');

// Controller
const {
  getAllUsers,
  createUser,
  login,
  checkToken,
} = require('../controllers/usersController');

const router = express.Router();

router.get('/', getAllUsers);

router.post('/', createUserValidations, checkValidations, createUser);

router.post('/login', login);

router.use(protectToken);

router.get('/check-token', checkToken);

module.exports = { usersRouter: router };
