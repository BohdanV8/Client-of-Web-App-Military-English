import Header from "../components/Header/Header";
import Home from "../components/pages/Home";
export const privateRoutes = [{ path: "/home/:id", element: Home }];
export const publicRoutes = [{ path: "/", element: Header }];
