import routerx from "express-promise-router";
import courseController from "../controllers/CourseController";
import auth from "../middlewares/auth";
const router = routerx();

router.post("/add", courseController.add);
router.get("/list", courseController.list);
router.put("/update", courseController.update);
router.put("/addStudent", courseController.addStudent);
router.put("/removeStudent", courseController.removeStudent);
router.put("/remove", courseController.remove);

export default router;