"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var _default = function _default() {
  return [(0, _expressValidator.check)("teacher", "teacher is required").exists(), (0, _expressValidator.check)("subject", "subject is required").exists(), (0, _expressValidator.check)("class", "class is required").exists(), (0, _expressValidator.check)("students", "students is required").exists(), (0, _expressValidator.check)("*.*.*", "All fields are required").notEmpty(), (0, _expressValidator.check)("teacher.email", "teacher invalid email").isEmail(), (0, _expressValidator.check)("students.*.email", "student invalid email").isEmail()];
};

exports["default"] = _default;