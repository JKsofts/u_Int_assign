import { check } from "express-validator";

export default () => {
  return [
    check("teacher", "teacher is required").exists(),
    check("subject", "subject is required").exists(),
    check("class", "class is required").exists(),
    check("students", "students is required").exists(),
    check("*.*.*", "All fields are required").notEmpty(),
    check("teacher.email", "teacher invalid email").isEmail(),
    check("students.*.email", "student invalid email").isEmail(),
  ];
};
