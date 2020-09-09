const router = require('express').Router();
const registerController = require('../controllers/registerController');
const { validate } = require('../middleware/validator');
const student = require("../models/Student");
const { studentValidation } = require("../middleware/studentValidation");
const bcrypt = require('bcrypt');

router.post(
  '/register/teacher',
  registerController.teacherValidationRules(),
  validate,
  registerController.registerTeacher
);


router.post('/register/student', async (req, res) => {

  //validate pwd, email, and username
  const { error } = studentValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if email is already in the database
  const emailExist = await student.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //hash pwd
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  // create new and save the new user to the database
  const newStudent = new student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    level: req.body.level

  });
  try {
    const savedStudent = await newStudent.save();
    res.send({ user: savedStudent._id });
  } catch (err) {
    res.status(400).err;
    console.log(err);
  }

});


module.exports = router;