const { app } = require('./app');
const { db } = require('./utils/database');

db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Elektron is running on port: ${PORT}`);
});
