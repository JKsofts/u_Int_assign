"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _RegisterController = require("../controllers/RegisterController");

var _request = _interopRequireDefault(require("./__mocks__/request"));

var _response = _interopRequireDefault(require("./__mocks__/response"));

test("should return 204 (No content)", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = expect;
          _context.next = 3;
          return (0, _RegisterController.RegisterHandler)(_request["default"][0], _response["default"]);

        case 3:
          _context.t1 = _context.sent;
          (0, _context.t0)(_context.t1).toBe(204);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
test("should return 400 (bad request)", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = expect;
          _context2.next = 3;
          return (0, _RegisterController.RegisterHandler)(_request["default"][1], _response["default"]);

        case 3:
          _context2.t1 = _context2.sent;
          (0, _context2.t0)(_context2.t1).toBe(204);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));