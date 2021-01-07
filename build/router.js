"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _HealthcheckController = _interopRequireDefault(require("./controllers/HealthcheckController"));

var _RegisterController = require("./controllers/RegisterController");

var _WorkloadController = require("./controllers/WorkloadController");

var router = _express["default"].Router();

router.use("/", _RegisterController.RegisterController);
router.use("/", _HealthcheckController["default"]);
router.use("/", _WorkloadController.WorkloadController);
var _default = router;
exports["default"] = _default;