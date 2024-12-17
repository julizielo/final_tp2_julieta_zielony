import express from "express"
import router from "./router/router.js"

const app = express();

let notas = [
    { id: 1, nombre: "‘Juan’", apellido: "‘Perez’", nota: 8 },
    { id: 2, nombre: "‘Ana’", apellido: "‘Suarez’", nota: 9 },
    { id: 3, nombre: "‘Juan’", apellido: "‘Perez’", nota: 5 },
    { id: 4, nombre: "‘Pedro’", apellido: "‘Gomez’", nota: 6 },
    { id: 5, nombre: "‘Ana’", apellido: "‘Suarez’", nota: 10 }
]

app.use(express.json())
app.use(router)

app.listen(8080, () => {
    console.log("Server listening at http://localhost:8080");
});

export {notas, app};

