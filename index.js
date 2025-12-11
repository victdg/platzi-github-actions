import { v4 } from "uuid";
console.log(`Hola mundo desde pipeline,\nuuid: ${v4()}`);
throw new Error("Error en el pipeline");
