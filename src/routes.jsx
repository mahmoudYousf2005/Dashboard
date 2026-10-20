
import { MdDashboard, MdTableView, MdReceiptLong, MdNotifications, MdPerson, MdLogin, MdAssignment } from "react-icons/md";
import Dashboard from "./layouts/dashboard/pageDashboard";
import Tables from "./layouts/tables/pageTables";
import Billing from "./layouts/billing/pageBillig";
import Notifications from "./layouts/notifications/pageNotifications";
import Profile from "./layouts/profile/pageProfile";
import SignIn from "./layouts/authentication/sign-in/pageSignIn";
import SignUp from "./layouts/authentication/sign-up/pageSignUp";


const routes = [
  { name: "Dashboard", path: "/dashboard", icon: MdDashboard, component: <Dashboard />, type: "dashboard" },
  { name: "Tables", path: "/tables", icon: MdTableView, component: <Tables />, type: "dashboard" },
  { name: "Billing", path: "/billing", icon: MdReceiptLong, component: <Billing />, type: "dashboard" },
  { name: "Notifications", path: "/notifications", icon: MdNotifications, component: <Notifications />, type: "dashboard" },
  { name: "Profile", path: "/profile", icon: MdPerson, component: <Profile />, type: "dashboard" },
  { name: "Sign Up", path: "/sign-up", icon: MdLogin, component: <SignUp />, type: "auth" },
  { name: "Sign In", path: "/sign-in", icon: MdAssignment, component: <SignIn />, type: "auth" },
];

export default routes;