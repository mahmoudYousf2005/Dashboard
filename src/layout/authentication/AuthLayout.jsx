import AuthNavbar from "../../examples/Navbars/AuthNavbar";
import Footer from "../../examples/footer/Footer"
const AuthLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-700 via-gray-900 to-black">
    <AuthNavbar />

    <main className="flex-1 flex items-center justify-center px-4 py-10">
      {children}
    </main>
    <Footer />
    {/* <p className="text-center text-sm text-gray-400 pb-6">
      © 2026, made with ♥ by Creative Tim for a better web.
    </p> */}
  </div>
);

export default AuthLayout;