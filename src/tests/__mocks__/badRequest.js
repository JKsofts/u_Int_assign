export default {
  body: {
    teacher: {
      name: '', //  <======= empty field =======>
      email: 'teacher1@gmail.com'
    },
    students: [
      {
        name: '', //  <======= empty field =======>
        email: 'student1@gmail.com'
      },
      {
        name: 'test Student 2',
        email: 'student2@gmail.com'
      }
    ],
    subject: {
      subjectCode: 'ENG',
      name: 'English'
    },
    class: {
      classCode: 'P1-1',
      name: 'P1 Integrity'
    }
  }
};
