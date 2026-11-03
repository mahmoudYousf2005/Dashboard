import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const profileInfo = {
  description:
    "Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
  details: [
    { label: "Full Name", value: "Alec M. Thompson" },
    { label: "Mobile", value: "(44) 123 1234 123" },
    { label: "Email", value: "alecthompson@mail.com" },
    { label: "Location", value: "USA" },
  ],
  social: [
    { id: 1, name: "Facebook", icon: FaFacebook, color: "text-blue-700", url: "#" },
    { id: 2, name: "Twitter", icon: FaTwitter, color: "text-sky-500", url: "#" },
    { id: 3, name: "Instagram", icon: FaInstagram, color: "text-gray-800", url: "#" },
  ],
};