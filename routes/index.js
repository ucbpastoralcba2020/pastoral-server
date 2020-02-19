import routerx from "express-promise-router";
import userRouter from "./user";
import courseRouter from "./course";
import imageRouter from "./image";
import videoRouter from "./video";
import mainpage from "./mainpage";

const router = routerx();

router.use("/user", userRouter);
router.use("/course", courseRouter);
router.use("/image", imageRouter);
router.use("/video", videoRouter);
router.use("/mainpage", mainpage);


export default router;