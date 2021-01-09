import Express from 'express';
import { validationResult } from 'express-validator';
import {
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from 'http-status-codes';

import Logger from '../config/logger';
import { db } from '../models/index';

//validation middleware
import validate from '../validators/RegisterRequestValidator';

const LOG = new Logger('RegisterController.js');
const RegisterController = Express.Router();

const RegisterHandler = async (req, res) => {
  const checkResult = validationResult(req).errors;
  if (checkResult.length) {
    res.sendStatus(BAD_REQUEST);
    LOG.error(checkResult);
  } else {
    try {
      await handleData(req.body);
      res.sendStatus(NO_CONTENT);
    } catch (error) {
      res.sendStatus(INTERNAL_SERVER_ERROR);
      LOG.error(error);
    }
  }
};

const handleData = async (body) => {
  const { teacher, students, subject, class: _class } = body;
  const ops = {
    returning: true,
    plain: true,
  };
  // upsert received data and get ids after destructuring returned object
  const [{ dataValues: classData }] = await db.class.upsert(_class, ops);
  const [{ dataValues: subjectData }] = await db.subject.upsert(subject, ops);
  const [{ dataValues: teacherData }] = await db.teacher.upsert(teacher, ops);

  // upsert students
  for (const student of students) {
    await db.student.upsert(student);
  }

  const { id: classId } = classData;
  const { id: subjectId } = subjectData;
  const { id: teacherId } = teacherData;

  // uspsert data to bridge tables
  await db.teacherSubjects.upsert({ teacherId, subjectId, classId });
};

RegisterController.use(validate()); // validate request before saving to database
RegisterController.post('/register', RegisterHandler);

export default RegisterController;
