import { Teacher } from "../teacher.js";
import { Teacher as TeacherInhritance } from "./teacher-inheritance.js";
import { User } from "./user.js";

export function inheritanceMain() {
  const teacher = new Teacher(
    "Christian Cesar",
    "999.999.999-99",
    new Date("2020-01-01")
  );
  console.log(teacher.getRegistration());
  console.log(teacher.getEmail());

  const teacherInhritance = new TeacherInhritance("Christian Cesar");
  console.log(teacherInhritance.getRegistration());
  console.log(teacherInhritance.getEmail());

  console.log("Estudante é do tipo", teacherInhritance instanceof User);
}
