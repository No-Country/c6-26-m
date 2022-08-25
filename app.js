const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { globalErrorHandler } = require('./controllers/errorsController');
const { usersRouter } = require('./routes/usersRoutes');

const app = express();

app.use(cors());

app.use(express.json());

const limiter = rateLimit({
  max: 10000,
  windowMs: 1 * 60 * 60 * 1000, // Significa 1 hr
  message: 'Too many requests from this IP',
});

app.use(limiter);

app.use('/elektron/v1/users', usersRouter);

app.use('*', globalErrorHandler);

module.exports = { app };
