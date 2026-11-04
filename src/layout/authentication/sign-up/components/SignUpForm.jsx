import { useState } from "react";
import { Link } from "react-router-dom";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Password", type: "password" },
];

const SignUpForm = () => {
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [agree, setAgree] = useState(true);

  const handleChange = (e) =>
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values); // هنا هتربط الـ API بعدين
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

      <label className="flex items-center gap-2 text-sm text-gray-500">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="accent-blue-500"
        />
        <span>
          I agree the <span className="font-bold text-blue-500">Terms and Conditions</span>
        </span>
      </label>

      <button
        type="submit"
        disabled={!agree}
        className="w-full py-3 rounded-lg bg-blue-500 text-white text-sm font-bold uppercase shadow-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-bold text-blue-500">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;