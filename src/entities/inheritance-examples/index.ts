import { Teacher } from "../teacher.js";

export function inheritanceMain() {
  const teacher = new Teacher("Christian Cesar");
  console.log(teacher.getRegistration());
  console.log(teacher.getEmail());
}
