import { Teacher as TeacherInhritance } from "../teacher.js";
import { Teacher } from "../../entities/teacher.js";
import { User } from "./user.js";

export function inheritanceMain() {
  const teacher = new Teacher("Christian Cesar");
  console.log(teacher.getRegistration());
  console.log(teacher.getEmail());

  const teacherInhritance = new TeacherInhritance("Christian Cesar");
  console.log(teacherInhritance.getRegistration());
  console.log(teacherInhritance.getEmail());

  console.log("Estudante é do tipo", teacherInhritance instanceof User);
}
