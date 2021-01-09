"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var _default = function _default() {
  return [(0, _expressValidator.check)('subject', 'subject is required').exists(), (0, _expressValidator.check)('subject.*', 'subject name and code are required').notEmpty(), (0, _expressValidator.check)('class', 'class is required').exists(), (0, _expressValidator.check)('class.*', 'class name and code are required').notEmpty(), (0, _expressValidator.check)('teacher', 'teacher is required').exists(), (0, _expressValidator.check)('teacher.email', 'teacher invalid email').isEmail(), (0, _expressValidator.check)('teacher.name', 'teacher name is required').notEmpty(), (0, _expressValidator.check)('students', 'students entries are required').exists(), (0, _expressValidator.check)('students.*.email', 'student invalid email').isEmail(), (0, _expressValidator.check)('students.*.name', 'student name is required').notEmpty()];
};

exports["default"] = _default;