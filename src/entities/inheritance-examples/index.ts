import { Student } from "./student-inheritance.js";
import { Teacher as TeacherInhritance } from "./teacher-inheritance.js";
import { User } from "./user.js";

export function inheritanceMain() {
  const teacher = new Student("Christian Cesar");
  console.log(teacher);

  const teacherInhritance = new TeacherInhritance("Christian Cesar");
  console.log(teacherInhritance.getRegistration());
  console.log(teacherInhritance.getEmail());

  console.log("Estudante é do tipo", teacherInhritance instanceof User);
}
