const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { swaggerOptions } = require('./swaggerOptions');
const registerRoutes = require('./routes/registerRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

const specs = swaggerJsdoc(swaggerOptions(process.env.PORT || 3000));
app.use('/docs', swaggerUi.serve);
app.get(
  '/docs',
  swaggerUi.setup(specs, {
    explorer: true,
  })
);

app.use(registerRoutes);
app.use(teacherRoutes);

app.get('/', (req, res) => {
  res.send('Estudy: Team-180-a');
});

// This should be the last route else any after it won't work
app.use('*', (req, res) => {
  res.status(404).json({
    success: 'false',
    message: 'Not found',
    error: {
      statusCode: 404,
      message: 'You reached a route that is not defined on this server',
    },
  });
});

// connect to our db
const { MONGOLAB_URI } = process.env;
const connectToDb = async () => {
  try {
    mongoose.connection.on('connected', () => {
      // if connection is made successfully emit ready event.
      console.log('Database connected successfuly');
      app.emit('ready');
    });
    await mongoose.connect(MONGOLAB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (error) {
    console.log('Could not connect to the database. Exiting now...', error);
    process.exit();
  }
};
connectToDb();

// if db is connected, handle ready event , start server.
app.on('ready', () => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log('Server is listening on port 3000');
  });
});
