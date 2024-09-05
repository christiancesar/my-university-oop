import { DisciplineFactory } from "./factories/discipline-factory.js";
function main() {
    const disciplines = DisciplineFactory.make();
    console.log(disciplines);
}
main();
