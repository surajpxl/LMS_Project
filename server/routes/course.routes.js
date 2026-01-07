import { Router } from "express";
import {
    addLectureToCourseById,
  createCourse,
  getAllCourses,
  getLecturesByCourseId,
  removeCourse,
  removeLecture,
  updateCourse,
} from "../controllers/course.controller.js";
import { authorizedRoles, isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router
  .route("/")
  .get(getAllCourses)
  .post(
    isLoggedIn,
    authorizedRoles("ADMIN"),
    upload.single("thumbnail"),
    createCourse
  );

router
  .route("/:id")
  .get(isLoggedIn, getLecturesByCourseId)
  .put(
    isLoggedIn, 
     authorizedRoles("ADMIN"),
    updateCourse
)
  .delete(
    isLoggedIn, 
     authorizedRoles("ADMIN"),
    removeCourse
)
.post(
    isLoggedIn,
    authorizedRoles("ADMIN"),
    upload.single('lecture'),
    addLectureToCourseById
)

router.delete(
  "/:courseId/lecture/:lectureId",
  isLoggedIn,
  authorizedRoles("ADMIN"),
  removeLecture
);

// .delete(
//     isLoggedIn,
//      authorizedRoles("ADMIN"),
//      removeLecture
// )

export default router;




// const router = Router();

// router
//   .route("/")
//   .get(getAllCourses)
//   .post(
//     isLoggedIn,
//     authorizedRoles("ADMIN"),
//     upload.single("thumbnail"),
//     createCourse
//   );

// router
//   .route("/:courseId")
//   .get(isLoggedIn, getLecturesByCourseId)
//   .put(isLoggedIn, authorizedRoles("ADMIN"), updateCourse)
//   .delete(isLoggedIn, authorizedRoles("ADMIN"), removeCourse);

// router.post(
//   "/:courseId/lecture",
//   isLoggedIn,
//   authorizedRoles("ADMIN"),
//   upload.single("lecture"),
//   addLectureToCourseById
// );



// export default router;
