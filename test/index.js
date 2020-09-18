/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
require('dotenv').config();
// const assert = require('assert');
const mongoose = require('mongoose');
const teacherService = require('./services/teacherService');

let db = null;

before(async function () {
  const { MONGOLAB_URI_TEST } = process.env;
  await mongoose.connect(MONGOLAB_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  db = mongoose.connection;
  db.on('error', function () {
    console.log('Connection Error');
  });
  db.on('open', function () {
    console.log('Connection open');
  });
  db.on('close', function () {
    console.log('Connection closed');
  });
});

describe('EStudy API Tests', () => {
  teacherService();
});

after(async function () {
  db.close();
});
