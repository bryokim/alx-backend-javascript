import AppController from "../controllers/AppController";
import StudentsController from "../controllers/StudentsController";

import { Router } from "express";

const router = Router();

router.get("/", AppController.getHomePage);

router.get("/students", StudentsController.getAllStudents);

router.get("/students/:major", StudentsController.getAllStudentsByMajor);

export default router;
