import { v4 } from "uuid";
console.log(`Hola mundo desde pipeline,\nuuid: ${v4()}`);
console.log(`process.env::>> ${JSON.stringify(process.env)}`);
if (process.env.IS_OK !== "true") throw new Error("Error en el pipeline");
