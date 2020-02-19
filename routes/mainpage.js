import routerx from "express-promise-router";
import mainPageController from "../controllers/MainPageController"; 
const router = routerx();

router.get("/list", mainPageController.list);
router.post("/add", mainPageController.add);
router.put("/update", mainPageController.update);

export default router;