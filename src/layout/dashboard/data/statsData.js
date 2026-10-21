import { MdWeekend, MdLeaderboard } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";

export const stats = [
  { id: 1, title: "Bookings", value: "281", color: "bg-gray-700", percent: "+55%", label: "than last week", icon: MdWeekend },
  { id: 2, title: "Today's Users", value: "2,300", color: "bg-blue-500", percent: "+3%", label: "than last month", icon: MdLeaderboard },
  { id: 3, title: "Revenue", value: "$34k", color: "bg-green-500", percent: "+1%", label: "than yesterday", icon: FaStoreAlt },
  { id: 4, title: "Followers", value: "+91", color: "bg-red-500", percent: "", label: "Just updated", icon: IoPersonAddSharp },
];