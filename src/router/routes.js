import Header from "../components/pages/Header/Header";
import UserPage from "../components/pages/UserPage/UserPage";
import CourseModeratorPage from "../components/pages/CourseModeratorPage/CourseModeratorPage";
import CoursesrPage from "../components/pages/CoursesPage/CoursesPage";
import SelectedCourseOfModerator from "../components/pages/SelectedCourseOfModerator/SelectedCourseOfModerator";
import SelectedTopicOfModerator from "../components/pages/SelectedTopicOfModerator/SelectedTopicOfModerator";
export const userRoutes = [{ path: "/userPage", element: UserPage }];
export const courseModeratorRoutes = [
  { path: "/courseModeratorPage", element: CourseModeratorPage },
  { path: "/selectedCourseOfModerator", element: SelectedCourseOfModerator },
  { path: "/selectedTopicOfModerator", element: SelectedTopicOfModerator },
];
export const publicRoutes = [
  { path: "/", element: Header },
  { path: "/courses", element: CoursesrPage },
];
