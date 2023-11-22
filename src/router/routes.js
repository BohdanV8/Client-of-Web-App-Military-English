import Header from "../components/pages/Header/Header";
import UserPage from "../components/pages/UserPage/UserPage";
import CourseModeratorPage from "../components/pages/CourseModeratorPage/CourseModeratorPage";
import CoursesrPage from "../components/pages/CoursesPage/CoursesPage";
import SelectedCourseOfModerator from "../components/pages/SelectedCourseOfModerator/SelectedCourseOfModerator";
import SelectedTopicOfModerator from "../components/pages/SelectedTopicOfModerator/SelectedTopicOfModerator";
import SelectedUserCourse from "../components/pages/SelectedUserCourse/SelectedUserCourse";
import SelectedUserTopic from "../components/pages/SelectedUserTopic/SelectedUserTopic";
import ManagerPage from "../components/pages/ManagerPage/ManagerPage";
export const userRoutes = [
  { path: "/userPage", element: UserPage },
  { path: "/selectedUserCourse", element: SelectedUserCourse },
  { path: "/selectedUserTopic", element: SelectedUserTopic },
];
export const courseModeratorRoutes = [
  { path: "/courseModeratorPage", element: CourseModeratorPage },
  { path: "/selectedCourseOfModerator", element: SelectedCourseOfModerator },
  { path: "/selectedTopicOfModerator", element: SelectedTopicOfModerator },
];
export const publicRoutes = [
  { path: "/", element: Header },
  { path: "/courses", element: CoursesrPage },
];

export const managerRoutes = [
  {path: "/ManagerPage", element: ManagerPage}
]
