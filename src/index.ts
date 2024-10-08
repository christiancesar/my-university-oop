import { ClassRoom } from "./entities/class-room.js";
import { inheritanceMain } from "./entities/inheritance-examples/index.js";
import { User } from "./entities/inheritance-examples/user.js";
// import { Student } from "./entities/student.js";
import { Workload } from "./entities/workload.js";
import { ClassRoomFactory } from "./factories/class-room-factory.js";
import { DisciplineFactory } from "./factories/discipline-factory.js";
import { StudentFactory } from "./factories/student-factory.js";
import { DisciplinesSeed } from "./seeds/diciplines-seed.js";
import { StudentsSeed } from "./seeds/students-seed.js";

function main() {
  // const disciplines = DisciplinesSeed.execute();
  // console.log(JSON.stringify(disciplines, null, 2));

  // const students = StudentsSeed.execute();
  // console.log(JSON.stringify(students, null, 2));

  // const classRoom = new ClassRoom(disciplines[0]);

  // const classRoom = ClassRoomFactory.make({ discipline: disciplines[0] });

  // classRoom.addStudent(students[0]);
  // classRoom.addStudent(students[1]);
  // classRoom.updateWorkloadStudent(students[0].getId(), new Workload(4, 0));
  // classRoom.updateWorkloadStudent(students[0].getId(), new Workload(4, 0));
  // classRoom.updateWorkloadStudent(students[0].getId(), new Workload(0, 4));

  // console.log("Class Room", JSON.stringify(classRoom, null, 2));

  // classRoom.calculateAverageStudents();
  // classRoom.showTheFinalGrade();

  // example inheritance
  inheritanceMain();
}

main();
