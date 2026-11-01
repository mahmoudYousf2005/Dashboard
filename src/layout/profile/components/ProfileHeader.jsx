import { useState } from "react";
import { MdHome, MdEmail, MdSettings } from "react-icons/md";
import avatar from "../../../assets/team-1.jpg";

const tabs = [
  { id: "app", label: "App", icon: MdHome },
  { id: "message", label: "Message", icon: MdEmail },
  { id: "settings", label: "Settings", icon: MdSettings },
];

const ProfileHeader = () => {
  const [active, setActive] = useState("app");

  return (
    <div className="">
    <div className="h-28 bg-blue-400 rounded-xl"/>
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white p-5 mx-5 -mt-6">
      <div className="flex items-center gap-4">
        <img src={avatar} alt="Richard Davis" className="w-20 h-20 rounded-full object-cover shadow-md" />
        <div>
          <h2 className="font-bold text-lg text-gray-700">Richard Davis</h2>
          <p className="text-sm text-gray-400">CEO / Co-Founder</p>
        </div>
      </div>

      <div className="flex bg-gray-100 rounded-lg p-1 self-start md:self-auto">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
              active === id ? "bg-white shadow-sm text-gray-700 transition-all" : "text-gray-500"
            }`}
          >
            <Icon /> {label}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProfileHeader;