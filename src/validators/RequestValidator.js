import { check } from 'express-validator';

export default () => {
  return [
    check('subject', 'subject is required').exists(),
    check('subject.*', 'subject name and code are required').notEmpty(),
    check('class', 'class is required').exists(),
    check('class.*', 'class name and code are required').notEmpty(),
    check('teacher', 'teacher is required').exists(),
    check('teacher.email', 'teacher invalid email').isEmail(),
    check('teacher.name', 'teacher name is required').notEmpty(),
    check('students', 'students entries are required').exists(),
    check('students.*.email', 'student invalid email').isEmail(),
    check('students.*.name', 'student name is required').notEmpty()
  ];
};
