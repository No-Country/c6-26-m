const { body, validationResult } = require('express-validator');
const { AppError } = require('../utils/appError');

//estas validaciones son para serciorarnos de que lo que se envía desde el front, esté en orden. SOn validaciones que da Express
const createUserValidations = [
  body('username').notEmpty().withMessage('Username cannot be empty'),
  body('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
];

//esta función revisa las validaciones de arriba y si hay algo mal, manda al error global (AppError)
const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const messages = errors.array().map(({ msg }) => msg);

    const errorMsg = messages.join('. ');

    return next(new AppError(errorMsg, 400));
  }
  next();
};

module.exports = {
  createUserValidations,
  checkValidations,
};
