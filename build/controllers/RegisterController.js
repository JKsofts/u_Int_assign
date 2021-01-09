"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _expressValidator = require("express-validator");

var _httpStatusCodes = require("http-status-codes");

var _logger = _interopRequireDefault(require("../config/logger"));

var _index = require("../models/index");

var _RequestValidator = _interopRequireDefault(require("../validators/RequestValidator"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var LOG = new _logger["default"]('RegisterController.js');

var RegisterController = _express["default"].Router();

var RegisterHandler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var checkResult;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            checkResult = (0, _expressValidator.validationResult)(req).errors;

            if (!checkResult.length) {
              _context.next = 6;
              break;
            }

            res.sendStatus(_httpStatusCodes.BAD_REQUEST);
            LOG.error(checkResult);
            _context.next = 16;
            break;

          case 6:
            _context.prev = 6;
            _context.next = 9;
            return handleData(req.body);

          case 9:
            res.sendStatus(_httpStatusCodes.NO_CONTENT);
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](6);
            res.sendStatus(_httpStatusCodes.INTERNAL_SERVER_ERROR);
            LOG.error(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 12]]);
  }));

  return function RegisterHandler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var handleData = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var teacher, students, subject, _class, ops, _yield$db$class$upser, _yield$db$class$upser2, classData, _yield$db$subject$ups, _yield$db$subject$ups2, subjectData, _yield$db$teacher$ups, _yield$db$teacher$ups2, teacherData, _iterator, _step, student, classId, subjectId, teacherId;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            teacher = body.teacher, students = body.students, subject = body.subject, _class = body["class"];
            ops = {
              returning: true,
              plain: true
            }; // upsert received data and get ids after destructuring returned object

            _context2.next = 4;
            return _index.db["class"].upsert(_class, ops);

          case 4:
            _yield$db$class$upser = _context2.sent;
            _yield$db$class$upser2 = (0, _slicedToArray2["default"])(_yield$db$class$upser, 1);
            classData = _yield$db$class$upser2[0].dataValues;
            _context2.next = 9;
            return _index.db.subject.upsert(subject, ops);

          case 9:
            _yield$db$subject$ups = _context2.sent;
            _yield$db$subject$ups2 = (0, _slicedToArray2["default"])(_yield$db$subject$ups, 1);
            subjectData = _yield$db$subject$ups2[0].dataValues;
            _context2.next = 14;
            return _index.db.teacher.upsert(teacher, ops);

          case 14:
            _yield$db$teacher$ups = _context2.sent;
            _yield$db$teacher$ups2 = (0, _slicedToArray2["default"])(_yield$db$teacher$ups, 1);
            teacherData = _yield$db$teacher$ups2[0].dataValues;
            // upsert students
            _iterator = _createForOfIteratorHelper(students);
            _context2.prev = 18;

            _iterator.s();

          case 20:
            if ((_step = _iterator.n()).done) {
              _context2.next = 26;
              break;
            }

            student = _step.value;
            _context2.next = 24;
            return _index.db.student.upsert(student);

          case 24:
            _context2.next = 20;
            break;

          case 26:
            _context2.next = 31;
            break;

          case 28:
            _context2.prev = 28;
            _context2.t0 = _context2["catch"](18);

            _iterator.e(_context2.t0);

          case 31:
            _context2.prev = 31;

            _iterator.f();

            return _context2.finish(31);

          case 34:
            classId = classData.id;
            subjectId = subjectData.id;
            teacherId = teacherData.id; // uspsert data to bridge tables

            _context2.next = 39;
            return _index.db.teacherSubjects.upsert({
              teacherId: teacherId,
              subjectId: subjectId,
              classId: classId
            });

          case 39:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[18, 28, 31, 34]]);
  }));

  return function handleData(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

RegisterController.use((0, _RequestValidator["default"])()); // validate request before saving to database

RegisterController.post('/register', RegisterHandler);
var _default = RegisterController;
exports["default"] = _default;