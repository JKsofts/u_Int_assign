"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterController = exports.RegisterHandler = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _expressValidator = require("express-validator");

var _httpStatusCodes = require("http-status-codes");

var _RequestValidator = _interopRequireDefault(require("./RequestValidator"));

var RegisterController = _express["default"].Router();

exports.RegisterController = RegisterController;

var RegisterHandler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _expressValidator.validationResult)(req).errors.length ? res.status(_httpStatusCodes.BAD_REQUEST).send({
              erros: (0, _expressValidator.validationResult)(req)["errors"]
            }) : res.sendStatus(_httpStatusCodes.NO_CONTENT));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function RegisterHandler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.RegisterHandler = RegisterHandler;
RegisterController.use((0, _RequestValidator["default"])());
RegisterController.post("/register", RegisterHandler);