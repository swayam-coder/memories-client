import { lazy } from "react"

const Login = lazy(() => import("../Auth/Login"))
const SignUp = lazy(() => import("../Auth/Signup"))
const Landing = lazy(() => import("../Landing/Landing"))
const Profile = lazy(() => import("../Profile/Profile"))
const App = lazy(() => import("../App"))
const Navbar = lazy(() => import("../Navbar/navbar"))
const PrivateRoute = lazy(() => import("../../PrivateRoute/PrivateRoute"))
const PasswordChange = lazy(() => import("../../components/Auth/PasswordChange"))
const Post = lazy(() => import("../../components/PostDetail/PostDetail"))

export { Login, SignUp, Landing, Profile, App, Navbar, PrivateRoute, PasswordChange, Post }