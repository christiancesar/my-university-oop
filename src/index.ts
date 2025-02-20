import { faker } from "@faker-js/faker";
import { Workload } from "./entities/workload.js";
import { ClassRoomFactory } from "./factories/class-room-factory.js";
import { DisciplinesSeed } from "./seeds/diciplines-seed.js";
import { StudentsSeed } from "./seeds/students-seed.js";

export function main() {
  const disciplines = DisciplinesSeed.execute();
  // console.log(JSON.stringify(disciplines, null, 2));

  const students = StudentsSeed.execute();
  // console.log(JSON.stringify(students, null, 2));

  const classRoom = ClassRoomFactory.make({ discipline: disciplines[0] });
  classRoom.addStudent(students[0]);

  const day01 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(4, 0)
  );
  const day02 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(4, 0)
  );
  const day03 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(4, 0)
  );
  const day04 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(4, 0)
  );
  const day05 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(4, 0)
  );
  const day06 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(4, 0)
  );
  const day07 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(4, 0)
  );
  const day08 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(4, 0)
  );
  const day09 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(0, 4)
  );
  const day10 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(0, 4)
  );
  const day11 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(0, 4)
  );
  const day12 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(0, 4)
  );
  const day13 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(0, 4)
  );
  const day14 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(0, 4)
  );
  const day15 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(0, 4)
  );
  const day16 = classRoom.createDailyReport(
    faker.lorem.text(),
    new Workload(0, 4)
  );

  classRoom.updateWorkloadStudent(students[0].getId(), day01?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day02?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day03?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day04?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day05?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day06?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day07?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day08?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day09?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day10?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day11?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day12?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day13?.dailyId || "");
  // classRoom.updateWorkloadStudent(students[0].getId(), day14?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day15?.dailyId || "");
  classRoom.updateWorkloadStudent(students[0].getId(), day16?.dailyId || "");

  classRoom.updateGradeStudent(students[0].getId(), 6);
  classRoom.updateGradeStudent(students[0].getId(), 7);
  classRoom.updateGradeStudent(students[0].getId(), 8);

  // console.log(JSON.stringify(classRoom, null, 2));

  classRoom.endClass();
}

main();
