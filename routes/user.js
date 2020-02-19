import routerx from "express-promise-router";
import userController from "../controllers/UserController";
import auth from "../middlewares/auth";
import { check } from "express-validator";


const router = routerx();
// auth.verifyAdministrator

router.post("/add",
    [
        check("idCard", "El ci es obligatorio.").not().isEmpty(),
        check("name", "El nombre es obligatorio.").not().isEmpty(),
        check("firstSurname", "El apellido paterno es obligatorio.").not().isEmpty(),
        check("secondSurname", "El apellido materno es obligatorio.").not().isEmpty(),
        check("email", "Ingrese un email valido.").isEmail(),
        check("cellPhoneNumber", "El celular es obligatorio.").not().isEmpty(),
        check("password", "El password es obligatorio.").not().isEmpty(),

        check("idCard", "Ingrese un ci valido.").isLength({ min: 5, max: 9 }),
        check("cellPhoneNumber", "Ingrese un celular valido.").isLength({ min: 8, max: 8 }),
        check("password", "El password debe ser minimo de 6 caracteres.").isLength({ min: 6 }),
    ],
    userController.add);
router.get("/list", userController.list);
router.get("/getTeachers", userController.getTeachers);
router.put("/update",
    auth.verifyUser,
    [
        check("idCard", "El ci es obligatorio.").not().isEmpty(),
        check("name", "El nombre es obligatorio.").not().isEmpty(),
        check("firstSurname", "El apellido paterno es obligatorio.").not().isEmpty(),
        check("secondSurname", "El apellido materno es obligatorio.").not().isEmpty(),
        check("email", "Ingrese un email valido.").isEmail(),
        check("cellPhoneNumber", "El celular es obligatorio.").not().isEmpty(),
        check("password", "El password es obligatorio.").not().isEmpty(),

        check("idCard", "Ingrese un ci valido.").isLength({ min: 5, max: 9 }),
        check("cellPhoneNumber", "Ingrese un celular valido.").isLength({ min: 8, max: 8 }),
        check("password", "El password debe ser minimo de 6 caracteres.").isLength({ min: 6 }),
    ],
    userController.update);
router.put("/addtomycourses", userController.addtomycourses);
router.put("/removetomycourses", userController.removetomycourses);
router.delete("/remove", userController.remove);
router.post("/login", userController.login);


export default router;