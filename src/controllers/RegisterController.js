import Express from "express";
import {
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "http-status-codes";
import { validationResult } from "express-validator";

//validate middleware
import validate from "../validators/RequestValidator";

const RegisterController = Express.Router();

const RegisterHandler = async (req, res) => {
  return validationResult(req).errors.length
    ? res.sendStatus(BAD_REQUEST)
    : res.sendStatus(NO_CONTENT);
};

RegisterController.use(validate());
RegisterController.post("/register", RegisterHandler);

export { RegisterHandler, RegisterController };
