import Express from 'express';
import {
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR
} from 'http-status-codes';
import { validationResult } from 'express-validator';
import Logger from '../config/logger';
import { db } from '../models/index';

//validation middleware
import validate from '../validators/RequestValidator';

const LOG = new Logger('RegisterController.js');
const RegisterController = Express.Router();

const RegisterHandler = async (req, res) => {
  if (validationResult(req).errors.length) res.sendStatus(BAD_REQUEST);
  else {
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
    plain: true
  };

  // upsert received data and destructure returned object to get ids
  const [
    {
      dataValues: { id: classId }
    }
  ] = await db.class.upsert(_class, ops);
  const [
    {
      dataValues: { id: subjectId }
    }
  ] = await db.subject.upsert(subject, ops);
  const [
    {
      dataValues: { id: teacherId }
    }
  ] = await db.teacher.upsert(teacher, ops);

  for (const student of students) {
    await db.student.upsert(student, { returning: true });
  }

  // uspsert data to bridge tables
  await db.teacherClasses.upsert({ teacherId, classId }, { returning: true });
  await db.teacherSubjects.upsert(
    { teacherId, subjectId, classId },
    { returning: true }
  );
};

RegisterController.use(validate());
RegisterController.post('/register', RegisterHandler);

export { RegisterHandler, RegisterController };
