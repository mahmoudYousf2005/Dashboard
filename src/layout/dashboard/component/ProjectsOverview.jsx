import { MdOutlineDone } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { projects } from "../data/projectsData";

const ProjectsOverview = () => (
  <div className="p-4 bg-white rounded-xl ">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="font-bold text-xl text-gray-600">Projects</h2>
        <div className="flex items-center gap-1 mt-2">
          <MdOutlineDone className="text-blue-600 text-xl" />
          <h3 className="font-bold text-gray-500">
            30 done <span className="font-normal">this month</span>
          </h3>
        </div>
      </div>
      <button aria-label="Options" className="text-gray-500">
        <CiMenuKebab />
      </button>
    </div>

    {/* حاوية الـ scroll */}
    <div className="overflow-x-auto">
      {/* عرض أدنى عشان الجدول ميتضغطش على الموبايل */}
      <div className="min-w-[500px]">
        <div className="grid grid-cols-2 gap-4 text-gray-400 text-xs my-4 font-bold">
          <p>Companies</p>
          <div className="flex justify-around text-center">
            <p className="w-4/12">Members</p>
            <p className="w-4/12">Budget</p>
            <p className="w-4/12">Completion</p>
          </div>
        </div>

        {projects.map(({ id, name, logo, members, budget, progress, color }) => (
          <div key={id} className="grid grid-cols-2 gap-4 items-center py-3 border-b">
            <div className="flex items-center gap-3">
              <img src={logo} alt={name} className="w-8 h-8" />
              <p className="text-sm font-medium">{name}</p>
            </div>

            <div className="flex justify-around items-center text-center">
              <div className="flex justify-center -space-x-2.5 w-4/12">
                {members.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                ))}
              </div>

              <p className="text-sm w-4/12">{budget}</p>

              <div className="bg-gray-200 rounded-full h-2 w-4/12">
                <div
                  className={`${color} h-2 rounded-full`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsOverview;