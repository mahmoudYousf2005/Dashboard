import { useState } from "react";
import { Link } from "react-router-dom";

const fields = [
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Password", type: "password" },
];

const SignInForm = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);

  const handleChange = (e) =>
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...values, remember });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.map(({ name, label, type }) => (
        <div key={name}>
          <label htmlFor={name} className="block text-sm text-gray-500 mb-1">
            {label}
          </label>
          <input
            id={name}
            name={name}
            type={type}
            value={values[name]}
            onChange={handleChange}
            required
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 outline-none focus:border-blue-500"
          />
        </div>
      ))}

      {/* Remember me */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={remember}
          onClick={() => setRemember((prev) => !prev)}
          className={`relative shrink-0 w-10 h-5 rounded-full transition-colors ${
            remember ? "bg-gray-700" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
              remember ? "translate-x-5" : ""
            }`}
          />
        </button>
        <span className="text-sm text-gray-500">Remember me</span>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-blue-500 text-white text-sm font-bold uppercase shadow-md hover:bg-blue-600"
      >
        Sign In
      </button>

      <p className="text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link to="/sign-up" className="font-bold text-blue-500">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;