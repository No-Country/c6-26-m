//bcrypt encripta la contraseña para que sea segura (línea 25 y 26)
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const { User } = require('../models/usersModel');

const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');
const { app } = require('../app');

dotenv.config({ path: './config.env' });

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();

  res.status(200).json({
    users,
  });
});

const createUser = catchAsync(async (req, res, next) => {
  const { username, email, password, role } = req.body;

  //en la línea 25: se genera un "salto" de 12, o sea, la contraseña a codificar tendrá 12 caracteres que la librería bcrypt maneja por su cuenta;
  //en la línea 26: bcrypt "hashea" la contraseña, o sea, recibe el password que se envió desde el body y lo encripta tomando en cuenta el "salto" que se le especifió anteriormente
  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    username,
    email,
    password: hashPassword,
    role,
  });

  newUser.password = undefined;

  res.status(201).json({ newUser });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: { email, status: 'active' },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError('Invalid credentials', 400));
  }

  const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  user.password = undefined;

  res.status(200).json({ token, user });
});

//el checktoken es sólo para que en el front puedan saber cuál es el token.
const checkToken = catchAsync(async (req, res, next) => {
  res.status(200).json({ user: req.sessionUser });
});


module.exports = {
  getAllUsers,
  createUser,
  login,
  checkToken, //el checktoken es sólo para que en el front lo puedan consultar.
};
