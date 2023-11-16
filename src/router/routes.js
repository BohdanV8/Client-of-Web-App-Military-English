import Header from "../components/pages/Header/Header";
import UserPage from "../components/pages/UserPage/UserPage";
import CourseModeratorPage from "../components/pages/CourseModeratorPage/CourseModeratorPage";
import CoursesrPage from "../components/pages/CoursesPage/CoursesPage";
export const userRoutes = [{ path: "/userPage", element: UserPage }];
export const courseModeratorRoutes = [
  { path: "/courseModeratorPage", element: CourseModeratorPage },
];
export const publicRoutes = [
  { path: "/", element: Header },
  { path: "/courses", element: CoursesrPage },
];
