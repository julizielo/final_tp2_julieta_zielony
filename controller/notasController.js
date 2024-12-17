import { notas } from "../index.js";

class NotasController {
    async obtenerNotas(req, res) {
        res.status(200).send({ success: true, message: notas })
    }

    async obtenerNotasPorAlumno(req, res) {
        const notasAgrupadas = notas.reduce((result, current) => {
            const key = `${current.nombre} ${current.apellido}`;
            if (!result[key]) {
                result[key] = {
                    nombre: current.nombre,
                    apellido: current.apellido,
                    notas: []
                };
            }
            result[key].notas.push(current.nota);
            return result;
        }, {});

        const notasAlumnos = Object.values(notasAgrupadas);
        res.status(200).send({ success: true, message: notasAlumnos })
    }

    async guardarNota(req, res) {
        let { nombre, apellido, nota } = req.body
        if (
            !nombre ||
            !apellido ||
            nota === undefined ||
            typeof nota !== "number" ||
            nota < 0 || nota > 10
        ) {
            res.status(409).send({ success: false, message: "Los datos no son validos, no se guardo la nota" })
        } else {
            let notaNueva = {
                id: notas.length + 1,
                nombre: nombre,
                apellido: apellido,
                nota: nota
            }
            notas.push(notaNueva);
            res.status(201).send({
                success: true,
                message: {notaNueva}
            });
        }
    }


}

export default NotasController;