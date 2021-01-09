'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = exports.db = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../config/database");

var basename = _path["default"].basename(__filename);

var sequelize = new _sequelize["default"](_database.DB_SCHEMA, _database.DB_USER, _database.DB_PW, _database.CONFIG);
exports.sequelize = sequelize;
var db = {}; //get all models

exports.db = db;

_fs["default"].readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = require(_path["default"].join(__dirname, file))(sequelize, _sequelize["default"].DataTypes);

  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = _sequelize["default"];