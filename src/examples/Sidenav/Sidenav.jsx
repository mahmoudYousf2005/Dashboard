import routes from "../../routes";
import {  NavLink } from "react-router-dom";

const Sidenav = ({open , setOpen}) => {

console.log(open)
  return (
    <aside className={`${open ? "block" : "hidden"} md:block
        fixed top-0 left-0 z-20 m-3 p-4
        w-64 h-[calc(100vh-1.5rem)] overflow-y-auto
        rounded-xl bg-gray-800`}>

      <div className=" mb-6 py-4 border-b border-transparent 
        [border-image:linear-gradient(to_right,theme(colors.gray.500),theme(colors.gray.200),theme(colors.gray.500))_1]">

        <h2 className="font-bold text-gray-200 text-center cursor-pointer ">Material Dashboard</h2>

      </div>

      {routes.map((tab)=>{
        return(
          <NavLink key={tab.path} to={tab.path}
          onClick={() => setOpen(false)}
           className={({ isActive }) =>
          `h-12 flex items-center gap-4 rounded-lg px-4 font-medium transition-all mt-4 uppercase
           ${isActive
            ? "bg-blue-500 text-white"
            : "text-gray-200 hover:bg-gray-700"
        }`
      }
          ><span className="text-xl">{<tab.icon/>}</span>{tab.name}</NavLink>
        )
      })}

    </aside>
  )
}

export default Sidenav
