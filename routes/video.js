import routerx from "express-promise-router";
import videoController from "../controllers/VideoController"; 
import auth from "../middlewares/auth";
const router = routerx();

router.post("/add", videoController.add);
router.get("/list", videoController.list);
router.delete("/remove", auth.verifyAdministrator, videoController.remove);

export default router;