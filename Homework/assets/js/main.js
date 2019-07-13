function Student(name, surname, age, phoneNumber) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.phoneNumber = phoneNumber;
}

function Teacher(name, surname, age, educations, experience) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.educations = educations;
  this.experience = experience;
}

function Class(name, room, teachers, students, totalDuration) {
  this.name = name;
  this.room = room;
  this.teachers = teachers;
  this.students = students;
  this.totalDuration = totalDuration;

  this.getStudentsList = function() {
    for (const student of this.students) {
      console.log(`${student.name} ${student.surname}`);
    }
  }

  this.getStudentPhoneNumber = function(studentName) {
    for (const student of this.students) {
      if (student.name === studentName) {
        return student.phoneNumber;
      }
    }

    return `${studentName} adinda telebe tapilmadi`;
  }

  this.addStudent = function(telebe) {
    this.students.push(telebe);
  }

  this.removeStudent = function(telebeAdi) {
    let newStudentList = this.students.filter((student) => {
      return student.name !== telebeAdi;
    })

    this.students = newStudentList;
  }
}

const p406 = new Class(
  'P406',
  'Titan', [
    new Teacher('Yolchu', 'Nasib', 26, ['BMU', 'ADA'], ['ASAN Innovations', 'Code Academy', 'Freelancing']),
    new Teacher('Jamil', 'Alisgandarov', 21, ['ADNSU'], ['Code Academy', 'Freelancing']),
  ], [
    new Student('Nurlan', 'Mammadov', 18, '+994XXXXXXXXX'),
    new Student('Kamil', 'Salimli', 19, '+994516665731'),
    new Student('John', 'Doe', 23, '+994519998877'),
  ],
  340
)

p406.addStudent(
  new Student('Example', 'Student', 23, '+994519998877')
);

p406.addStudent(
  new Student('Test', 'Example', 23, '+994519998877')
);
p406.getStudentsList();

p406.removeStudent('Test');
p406.removeStudent('Kamil');

p406.getStudentsList();
