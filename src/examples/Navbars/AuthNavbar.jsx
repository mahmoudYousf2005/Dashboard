import { Link } from "react-router-dom";
import { MdDashboard, MdPerson, MdAssignment, MdLogin } from "react-icons/md";

const links = [
  { name: "Dashboard", path: "/dashboard", icon: MdDashboard },
  { name: "Profile", path: "/profile", icon: MdPerson },
  { name: "Sign Up", path: "/sign-up", icon: MdAssignment },
  { name: "Sign In", path: "/sign-in", icon: MdLogin },
];

const AuthNavbar = () => (
  <nav className="mx-4 mt-4 px-5 py-3 rounded-xl bg-white/80 backdrop-blur flex items-center justify-between shadow-lg">
    <Link to="/dashboard" className="font-bold text-gray-700">
      Material Dashboard
    </Link>

    <ul className="hidden md:flex items-center gap-6">
      {links.map((link) => (
        <li key={link.path}>
          <Link to={link.path} className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-500">
            <link.icon /> {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default AuthNavbar;