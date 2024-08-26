# Boilerplate Node Typescript
This project is starter template for TypeScript. For personal projects and teaching, providing a minimum structure.

```json
//package.json
{
  //...
  "scripts": {
    "dev:server": "node --no-warnings=ExperimentalWarning --loader ts-node/esm src/index.ts",
    "test": "vitest run",
    "test:watch": "vitest --watch",
    "test:cov": "vitest run --coverage"
  },
  "dependencies": {
    "@types/express": "^4.17.21",
    "cors": "^2.8.5",
    "crypto": "^1.0.1"
  },
  "devDependencies": {
    "@swc/core": "^1.7.18",
    "@swc/helpers": "^0.5.12",
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.21",
    "express": "^4.19.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.5.4",
    "vite-tsconfig-paths": "^5.0.1",
    "vitest": "^2.0.5"
  }
}
```
