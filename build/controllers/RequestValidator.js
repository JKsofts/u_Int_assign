"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var _default = function _default() {
  var result = [(0, _expressValidator.check)("*.*.*"), (0, _expressValidator.check)("teacher", "teacher is required").exists(), (0, _expressValidator.check)("teacher.email", "teacher invalid email").isEmail(), (0, _expressValidator.check)("teacher.name", "teacher's name is required").notEmpty(), (0, _expressValidator.check)("students", "students is required").exists(), (0, _expressValidator.check)("students.*.email", "student invalid email").isEmail(), (0, _expressValidator.check)("students.*.name").notEmpty(), (0, _expressValidator.check)("subject", "subject is required").exists(), (0, _expressValidator.check)("subject.name", "subject name required").notEmpty(), (0, _expressValidator.check)("subject.subjectCode", "subject code required").notEmpty(), (0, _expressValidator.check)("class", "class is required").exists(), (0, _expressValidator.check)("class.name", "class name is required").notEmpty(), (0, _expressValidator.check)("class.classCode", "class code is required").notEmpty()];
  return result;
};

exports["default"] = _default;