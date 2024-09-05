import { Student } from "./entities/student.js";
import { DisciplinesFactory } from "./factories/disciplines-factory.js";
import { StudentsFactory } from "./factories/students-factory.js";
import { DisciplinesSeed } from "./seeds/diciplines-seed.js";
import { StudentsSeed } from "./seeds/students-seed.js";

function main() {
  // const disciplines = DisciplinesSeed.execute();
  // console.log(JSON.stringify(disciplines, null, 2));

  const students = StudentsSeed.execute();
  console.log(JSON.stringify(students, null, 2));
}

main();
