import AuthLayout from "../AuthLayout";
import SignUpForm from "./components/SignUpForm";
import { socials } from "../data/socialData";

const SignUpPage = () => (
  <AuthLayout>
    <div className="w-full max-w-md bg-white rounded-xl shadow-xl pb-8">
      {/* الهيدر الأزرق */}
      <div className="-mt-6 mx-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-6 px-4 shadow-lg">
        <h2 className="font-bold text-2xl">Join us today</h2>
        <p className="text-sm mt-2">Enter your email and password to register</p>

        <div className="flex justify-center gap-6 mt-4 text-lg">
          {socials.map(({ id, name, icon: Icon, url }) => (
            <a key={id} href={url} aria-label={name} className="hover:opacity-80">
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="px-8 mt-8">
        <SignUpForm />
      </div>
    </div>
  </AuthLayout>
);

export default SignUpPage;