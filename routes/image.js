import routerx from "express-promise-router";
import imageController from "../controllers/ImageController"; 
const router = routerx();

router.post("/add", imageController.add);
router.get("/list", imageController.list);
router.delete("/remove", imageController.remove);

export default router;