
import { MdDashboard, MdTableView, MdReceiptLong, MdNotifications, MdPerson, MdLogin, MdAssignment } from "react-icons/md";
import Dashboard from "./layout/dashboard/DashboardPage";
import Tables from "./layout/tables/TablesPage";
import Billing from "./layout/billing/BillingPage";
import Notifications from "./layout/notifications/NotificationsPage";
import Profile from "./layout/profile/ProfilePage";
import SignIn from "./layout/authentication/sign-in/SignInPage";
import SignUp from "./layout/authentication/sign-up/SignUpPage";


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