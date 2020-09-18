/* eslint-disable no-undef */
const chai = require('chai');
const Teacher = require('../../models/Teacher');
const School = require('../../models/School');
const Class = require('../../models/Class');
const Subject = require('../../models/Subject');
const TeacherService = require('../../services/teacherService');

const { expect } = chai;

let teacherId = null;
let schoolId = null;
let classId = null;

module.exports = () => {
  describe('Teacher endpoints test', async () => {
    before(async () => {
      teacher = await Teacher.create({
        firstName: 'John',
        lastName: 'Doe',
        levelTaught: 'Primary',
        email: 'john.doe@email.com',
        password: 'wer4590',
      });
      await teacher.save();
      teacherId = teacher._id;

      const schoolA = await School.create({
        name: 'School A',
        adminId: teacher,
        level: 'Secondary',
        location: 'Nairobi',
        email: 'schoola@domain.com',
        postalAddress: '332, Nairobi',
        phoneNumber: '+25478000000',
        teachers: [teacher],
      });
      await schoolA.save();
      schoolId = schoolA._id;
      const schoolB = await School.create({
        name: 'School B',
        adminId: teacher,
        level: 'Secondary',
        location: 'Nairobi',
        email: 'schoola@domain.com',
        postalAddress: '332, Nairobi',
        phoneNumber: '+25478000000',
        teachers: [teacher],
      });
      await schoolB.save();

      teacher.schools.push(schoolA, schoolB);
      await teacher.save;

      const classA = await Class.create({
        name: 'class A',
        teachers: [teacher],
        schoolId: schoolA,
      });
      await classA.save();
      classId = classA._id;
      const classB = await Class.create({
        name: 'class B',
        teachers: [teacher],
        schoolId: schoolA,
      });
      await classB.save();
      const classC = await Class.create({
        name: 'class C',
        teachers: [teacher],
        schoolId: schoolB,
      });
      await classC.save();
      const classD = await Class.create({
        name: 'class D',
        teachers: [teacher],
        schoolId: schoolB,
      });
      await classD.save();

      teacher.classes.push(classA, classB, classC, classD);
      await teacher.save();

      const subject1 = await Subject.create({
        name: 'Subject 1',
        classes: [classA, classB],
      });
      await subject1.save();
      const subject2 = await Subject.create({
        name: 'Subject 2',
        classes: [classA],
      });
      await subject2.save();
      const subject3 = await Subject.create({
        name: 'Subject 3',
        classes: [classB],
      });
      await subject3.save();
      const subject4 = await Subject.create({
        name: 'Subject 4',
        classes: [classC, classD],
      });
      await subject4.save();
      const subject5 = await Subject.create({
        name: 'Subject 5',
        classes: [classC],
      });
      await subject5.save();
      const subject6 = await Subject.create({
        name: 'Subject 6',
        classes: [classD],
      });
      await subject6.save();

      teacher.subjects.push(
        subject1,
        subject2,
        subject3,
        subject4,
        subject5,
        subject6
      );
      await teacher.save();
    });

    it('Should find all teachers', async () => {
      const teachers = await TeacherService.getTeachers();
      expect(teachers.length).to.equal(1);
      expect(teachers[0]).to.include({
        firstName: 'John',
      });
    });

    it('Should find teacher by id', async () => {
      const t = await TeacherService.getTeacherById(teacherId);
      expect(t.firstName).to.equal('John');
    });

    it('Should get teacher schools', async () => {
      const schools = await TeacherService.getTeacherSchools(teacherId);
      expect(schools.length).to.equal(2);
      expect(schools[0]).to.include({
        name: 'School A',
      });
    });

    it('Should get teacher classes', async () => {
      const classes = await TeacherService.getTeacherClasses(teacherId);
      expect(classes.length).to.equal(4);
      expect(classes[0]).to.include({
        name: 'class A',
      });
    });

    it('Should get teacher classes in school', async () => {
      const classes = await TeacherService.getTeacherClassesInSchool(
        teacherId,
        schoolId
      );
      expect(classes.length).to.equal(2);
      expect(classes[0]).to.include({
        name: 'class A',
      });
    });

    it('Should get teacher subjects', async () => {
      const subjects = await TeacherService.getTeacherSubjects(teacherId);
      expect(subjects.length).to.equal(6);
      expect(subjects[0]).to.include({
        name: 'Subject 1',
      });
    });

    it('Should get teacher subjects in class', async () => {
      const subjects = await TeacherService.getTeacherSubjectsInClass(
        teacherId,
        classId
      );
      expect(subjects.length).to.equal(2);
      expect(subjects[0]).to.include({
        name: 'Subject 1',
      });
    });

    it('Should get teacher subjects in school', async () => {
      const subjects = await TeacherService.getTeacherSubjectsInSchool(
        teacherId,
        schoolId
      );
      expect(subjects.length).to.equal(3);
      expect(subjects[0]).to.include({
        name: 'Subject 1',
      });
    });

    after(async () => {
      await Teacher.deleteMany();
      await School.deleteMany();
      await Class.deleteMany();
      await Teacher.deleteMany();
      await Subject.deleteMany();
    });
  });
};
