import { profileProjects } from "../data/profileProjectsData"
const ProjectsSection = () => {
  return (
    <div className="mt-10">
       <h2 className="font-bold text-gray-700">Projects</h2>
        <p className="text-sm text-gray-400">Architects design houses</p>

        <div className="grid gap-8 mt-6 sm:grid-cols-2 xl:grid-cols-4">
            {profileProjects.map((item)=>(
                <div key={item.id} className="">
                    <img src={item.imageDecor} alt={item.title} className="w-full h-40 object-cover rounded-xl shadow-lg" />
                    <p className="text-sm text-gray-400 mt-4">{item.number}</p>
                    <h3 className="font-bold text-xl text-gray-600 mt-1">{item.title}</h3>
                    <p className="text-sm text-gray-400 mt-2">{item.description}</p>
                    <div className="flex items-center justify-between gap-6 md:gap-0 mt-4">
                        <button className="border border-blue-500 text-blue-500 text-xs font-bold px-4 py-2 rounded-lg uppercase">
                            view Project
                        </button>
                        <div className="flex mr-8">
                            {item.imageTeam.map((i)=>(
                                <img key={i} src={i} className="w-6 h-6 -ml-2 rounded-full border-2 border-white "/>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectsSection
