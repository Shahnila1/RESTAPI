import { Router } from "express";
import PostController from "../controllers/PostController";
import UserController from "../controllers/userController" ;

const router = Router();

router.post("/post", PostController.postPost);
router.get("/post", PostController.getPost);
router.get("/post/:id", PostController.getOnePost);
router.put("/post/:id", PostController.updatePost);
router.delete("/post/:id", PostController.deletePost);

router.post("/post", UserController.userUser);
router.get("/post", UserController.getPost);
router.get("/post/:id", UserController.getOnePost);
router.put("/post/:id", UserController.updatePost);
router.delete("/post/:id",UserController.deletePost);










export default router;