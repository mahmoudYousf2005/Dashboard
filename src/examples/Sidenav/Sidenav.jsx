import routes from "../../routes";
import {  NavLink } from "react-router-dom";

const Sidenav = () => {


  return (
    <div className={` w-64 h-[calc(100vh-2rem)] bg-gray-800 p-4 rounded-xl md:block md:z-0 34 fixed z-10 p-3`}
    >

      <div className=" mb-6 py-4 border-b border-transparent 
        [border-image:linear-gradient(to_right,theme(colors.gray.500),theme(colors.gray.200),theme(colors.gray.500))_1]">

        <h2 className="font-bold text-gray-200 text-center cursor-pointer ">Material Dashboard</h2>

      </div>

      {routes.map((tab)=>{
        return(
          <NavLink key={tab.path} to={tab.path} className={({ isActive }) =>
          `h-12 flex items-center gap-4 rounded-lg px-4 font-medium transition-all mt-4 uppercase
           ${isActive
            ? "bg-blue-500 text-white"
            : "text-gray-200 hover:bg-gray-700"
        }`
      }
          ><span className="text-xl">{<tab.icon/>}</span>{tab.name}</NavLink>
        )
      })}

    </div>
  )
}

export default Sidenav
