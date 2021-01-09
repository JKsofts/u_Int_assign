"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _supertest = _interopRequireDefault(require("supertest"));

var _app = _interopRequireDefault(require("../app"));

describe('test GET workload ', function () {
  test('It should return 200', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(done) {
      var response;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _supertest["default"])(_app["default"]).get('/api/workload');

            case 2:
              response = _context.sent;
              _context.next = 5;
              return expect(response.statusCode).toBe(200);

            case 5:
              done();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});