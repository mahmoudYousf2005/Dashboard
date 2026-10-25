
import { projects } from "../data/projectsData"
import { CiMenuKebab } from "react-icons/ci";
const ProjectsTable = () => {
  return (
    <div className="p-4 bg-white rounded-xl mt-10">
      <div className="flex items-center px-6 h-20 text-white font-bold bg-blue-500 rounded-lg -mt-8 shadow-lg">
        Projects Table
      </div>
      
      <div className=" overflow-x-auto">
        
        <table className="w-full min-w-[700px] text-left">
            <thead>
                <tr>
                    <th className="w-[35%] px-4 py-3 text-xs text-gray-400 uppercase">project</th>
                    <th className="px-4 py-3 text-xs text-gray-400 uppercase">budget</th>
                    <th className="px-4 py-3 text-xs text-gray-400 uppercase">status</th>
                    <th className="px-4 py-3 text-xs text-gray-400 uppercase text-center">completion</th>
                    <th className="px-4 py-3 text-xs text-gray-400 uppercase text-center">action</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((item)=>(
                    <tr className="border-t border-gray-100">
                        <td className="flex items-center gap-2 px-4 py-3 text-sm text-gray-500 font-semibold">
                            <img src={item.logo} alt={item.name} className="w-9 h-9"/>
                            <span>{item.name}</span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500 font-semibold">{item.budget}</td>
                        <td className="px-4 py-3 text-sm text-gray-500 font-semibold">{item.status}</td>
                        <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-gray-500 w-8">{item.progress}%</span>
                            <div className="bg-gray-200 rounded-full h-2 w-[80%] ">
                                <div
                                    className={ `h-2 rounded-full ${item.color}`}
                                    style={{ width: `${item.progress}%` }}
                                    />
                                </div>
                            </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500 font-semibold">
                            <div className="flex items-center justify-center"><CiMenuKebab /></div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
      </div>
    </div>
  )
}

export default ProjectsTable
