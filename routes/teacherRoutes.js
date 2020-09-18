const router = require('express').Router();
const teacherController = require('../controllers/teacherController');

router.get('/teachers', teacherController.getTeachers);

router.get('/teachers/:teacherId', teacherController.getTeacherDetails);

router.get('/teachers/:teacherId/schools', teacherController.getTeacherSchools);

router.get('/teachers/:teacherId/classes', teacherController.getTeacherClasses);

router.get(
  '/teachers/:teacherId/schools/:schoolId/classes',
  teacherController.getTeacherClassesInSchool
);

router.get(
  '/teachers/:teacherId/subjects',
  teacherController.getTeacherSubjects
);

router.get(
  '/teachers/:teacherId/schools/:schoolId/subjects',
  teacherController.getTeacherSubjectsInSchool
);

router.get(
  '/teachers/:teacherId/classes/:classId/subjects',
  teacherController.getTeacherSubjectsInClass
);

module.exports = router;
