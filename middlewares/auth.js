import tokenService from "../services/token";

export default {
    
    verifyUser: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                msg: "No token"
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.role == "Administrador" || response.role == "Instructor" || response.role == "Estudiante") {
            next();
        } else {
            return res.status(403).send({
                msg: "No autorizado"
            })
        }
    },
    verifyAdministrator: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                msg: "No token"
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.role == "Administrador") {
            next();
        } else {
            return res.status(403).send({
                msg: "No autorizado"
            })
        }
    },
    verifyInstructor: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                msg: "No token"
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.role == "Instructor" || response.role == "Administrador") {
            next();
        } else {
            return res.status(403).send({
                msg: "No autorizado"
            })
        }
    },
    verifyStudent: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                msg: "No token"
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.role == "Administrador" || response.role == "Estudiante") {
            next();
        } else {
            return res.status(403).send({
                msg: "No autorizado"
            })
        }
    }
}