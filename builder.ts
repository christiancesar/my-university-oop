import { argv } from "node:process";

console.log("argv", argv);

(async (target: "bun" | "node") => {
  const result = await Bun.build({
    entrypoints: ["./src/server.ts"],
    outdir: "./dist",
    target,
    format: "esm",
  });

  console.log(result);
})(argv[2] as "bun" | "node");
