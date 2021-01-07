import Express from 'express';
import { OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { db } from '../models/index';
import Logger from '../config/logger';

const LOG = new Logger('WorkloadController.js');
const WorkloadController = Express.Router();
const WorkloadHandler = async (req, res) => {
  try {
    let teacherWorkload = await getTeachersWorkload();
    res.status(OK).send(teacherWorkload);
  } catch (error) {
    LOG.error(error);
    res.sendStatus(INTERNAL_SERVER_ERROR);
  }
};

WorkloadController.get('/workload', WorkloadHandler);

const getTeachersWorkload = async () => {
  let workloadObject = {};
  const workloads = await getClassesCount();

  for (const _class of workloads) {
    const { name } = await getTeacherName(_class);
    const { subjectCode, name: subjectName } = await getSubjectInfo(_class);
    const { count: numberOfClasses } = _class;
    const SubjectWorkload = { subjectCode, subjectName, numberOfClasses };

    // create a subject array & push workload for non-existing teachers name and push only for existing ones
    !workloadObject[name]
      ? ((workloadObject[name] = []),
        workloadObject[name].push(SubjectWorkload))
      : workloadObject[name].push(SubjectWorkload);
  }

  return workloadObject;
};

const getClassesCount = async () => {
  return await db.teacherSubjects.count({
    group: ['teacherId', 'subjectId']
  });
};

const getSubjectInfo = async (_class) => {
  return await db.subject.findByPk(_class.subjectId, {
    attributes: ['name', 'subjectCode'],
    raw: true
  });
};

const getTeacherName = async (_class) => {
  return await db.teacher.findByPk(_class.teacherId, {
    attributes: ['name'],
    raw: true
  });
};

export { WorkloadHandler, WorkloadController };
