"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import { DB_SCHEMA, DB_USER, DB_PW, CONFIG } from "../config/database";

const basename = path.basename(__filename);
const sequelize = new Sequelize(DB_SCHEMA, DB_USER, DB_PW, CONFIG);
const db = {};

//get all models
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db, sequelize };
