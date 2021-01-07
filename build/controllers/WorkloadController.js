"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkloadController = exports.WorkloadHandler = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _httpStatusCodes = require("http-status-codes");

var _index = require("../models/index");

var _logger = _interopRequireDefault(require("../config/logger"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var LOG = new _logger["default"]("WorkloadController.js");

var WorkloadController = _express["default"].Router();

exports.WorkloadController = WorkloadController;

var WorkloadHandler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var teacherWorkload;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return getTeachersWorkload();

          case 3:
            teacherWorkload = _context.sent;
            res.status(_httpStatusCodes.OK).send(teacherWorkload);
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            LOG.error(_context.t0);
            res.sendStatus(_httpStatusCodes.INTERNAL_SERVER_ERROR);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function WorkloadHandler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.WorkloadHandler = WorkloadHandler;
WorkloadController.get("/workload", WorkloadHandler);

var getTeachersWorkload = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var workloadObject, teacherClasses, _iterator, _step, _class, _yield$getTeacherName, tName, _yield$getSubjectInfo, subjectCode, subjectName, numberOfClasses, SubjectWorkload;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            workloadObject = {};
            _context2.next = 3;
            return getClassesCount();

          case 3:
            teacherClasses = _context2.sent;
            _iterator = _createForOfIteratorHelper(teacherClasses);
            _context2.prev = 5;

            _iterator.s();

          case 7:
            if ((_step = _iterator.n()).done) {
              _context2.next = 23;
              break;
            }

            _class = _step.value;
            _context2.next = 11;
            return getTeacherName(_class);

          case 11:
            _yield$getTeacherName = _context2.sent;
            tName = _yield$getTeacherName.name;
            _context2.next = 15;
            return getSubjectInfo(_class);

          case 15:
            _yield$getSubjectInfo = _context2.sent;
            subjectCode = _yield$getSubjectInfo.subjectCode;
            subjectName = _yield$getSubjectInfo.name;
            numberOfClasses = _class.count;
            SubjectWorkload = {
              subjectCode: subjectCode,
              subjectName: subjectName,
              numberOfClasses: numberOfClasses
            }; // create a subject array & push workload for non-existing teachers name and push only for existing ones

            !workloadObject[tName] ? (workloadObject[tName] = [], workloadObject[tName].push(SubjectWorkload)) : workloadObject[tName].push(SubjectWorkload);

          case 21:
            _context2.next = 7;
            break;

          case 23:
            _context2.next = 28;
            break;

          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](5);

            _iterator.e(_context2.t0);

          case 28:
            _context2.prev = 28;

            _iterator.f();

            return _context2.finish(28);

          case 31:
            return _context2.abrupt("return", workloadObject);

          case 32:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 25, 28, 31]]);
  }));

  return function getTeachersWorkload() {
    return _ref2.apply(this, arguments);
  };
}();

var getClassesCount = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _index.db.teacherSubjects.count({
              group: ["teacherId", "subjectId"]
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getClassesCount() {
    return _ref3.apply(this, arguments);
  };
}();

var getSubjectInfo = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_class) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _index.db.subject.findByPk(_class.subjectId, {
              attributes: ["name", "subjectCode"],
              raw: true
            });

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getSubjectInfo(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var getTeacherName = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_class) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _index.db.teacher.findByPk(_class.teacherId, {
              attributes: ["name", "email"],
              raw: true
            });

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getTeacherName(_x4) {
    return _ref5.apply(this, arguments);
  };
}();