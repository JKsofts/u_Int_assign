"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterController = exports.RegisterHandler = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _httpStatusCodes = require("http-status-codes");

var _expressValidator = require("express-validator");

var _logger = _interopRequireDefault(require("../config/logger"));

var _index = require("../models/index");

var _RequestValidator = _interopRequireDefault(require("../validators/RequestValidator"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var LOG = new _logger["default"]("RegisterController.js");

var RegisterController = _express["default"].Router();

exports.RegisterController = RegisterController;

var RegisterHandler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(0, _expressValidator.validationResult)(req).errors.length) {
              _context.next = 4;
              break;
            }

            res.sendStatus(_httpStatusCodes.BAD_REQUEST);
            _context.next = 14;
            break;

          case 4:
            _context.prev = 4;
            _context.next = 7;
            return handleData(req.body);

          case 7:
            res.sendStatus(_httpStatusCodes.NO_CONTENT);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            res.sendStatus(_httpStatusCodes.INTERNAL_SERVER_ERROR);
            LOG.error(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 10]]);
  }));

  return function RegisterHandler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.RegisterHandler = RegisterHandler;

var handleData = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var teacher, students, subject, _class, upsertClass, upsertSubject, upsertTeacher, _iterator, _step, student, classId, subjectId, teacherId;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            teacher = body.teacher, students = body.students, subject = body.subject, _class = body["class"]; // upsert received data

            _context2.next = 3;
            return _index.db["class"].upsert(_class, {
              returning: true
            });

          case 3:
            upsertClass = _context2.sent;
            _context2.next = 6;
            return _index.db.subject.upsert(subject, {
              returning: true
            });

          case 6:
            upsertSubject = _context2.sent;
            _context2.next = 9;
            return _index.db.teacher.upsert(teacher, {
              returning: true
            });

          case 9:
            upsertTeacher = _context2.sent;
            _iterator = _createForOfIteratorHelper(students);
            _context2.prev = 11;

            _iterator.s();

          case 13:
            if ((_step = _iterator.n()).done) {
              _context2.next = 19;
              break;
            }

            student = _step.value;
            _context2.next = 17;
            return _index.db.student.upsert(student, {
              returning: true
            });

          case 17:
            _context2.next = 13;
            break;

          case 19:
            _context2.next = 24;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](11);

            _iterator.e(_context2.t0);

          case 24:
            _context2.prev = 24;

            _iterator.f();

            return _context2.finish(24);

          case 27:
            // get ids to upsert data into bridge tables
            classId = upsertClass[0].dataValues.id;
            subjectId = upsertSubject[0].dataValues.id;
            teacherId = upsertTeacher[0].dataValues.id; // uspsert data to bridge tables

            _context2.next = 32;
            return _index.db.teacherClasses.upsert({
              teacherId: teacherId,
              classId: classId
            }, {
              returning: true
            });

          case 32:
            _context2.next = 34;
            return _index.db.teacherSubjects.upsert({
              teacherId: teacherId,
              subjectId: subjectId,
              classId: classId
            }, {
              returning: true
            });

          case 34:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[11, 21, 24, 27]]);
  }));

  return function handleData(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

RegisterController.use((0, _RequestValidator["default"])());
RegisterController.post("/register", RegisterHandler);