const router = require('express').Router();
const registerController = require('../controllers/registerController');
const { validate } = require('../middleware/validator');

router.post(
  '/register/teacher',
  registerController.teacherValidationRules(),
  validate,
  registerController.registerTeacher
);


router.post('/register/student', registerController.registerStudent);


module.exports = router;