// import icons
import {MdDashboard , MdTableView, MdReceipt, MdNotifications, MdPerson ,MdAssignment , MdLogin } from "react-icons/md";
import {  NavLink } from "react-router-dom";
const tabs = [
    {id:1 , name:"dashboard" , path:"/" , icon: MdDashboard},
    {id:2 , name:"tables" , path:"/tables" , icon: MdTableView},
    {id:3 , name:"biling" , path:"/biling" , icon: MdReceipt},
    {id:4 , name:"notifications" , path:"/notifications" , icon: MdNotifications,},
    {id:5 , name:"profile" , path:"/profile" , icon: MdPerson},
    {id:6 , name:"sign Up" , path:"/sign-Up", icon: MdLogin},
    {id:7 , name:"sign In" , path:"/sign-In", icon: MdAssignment},
  ]
const Sidenav = () => {


  return (
    <div className={` w-64 h-[calc(100vh-2rem)] bg-gray-800 p-4 rounded-xl md:block md:z-0 34 fixed z-10 `}
    >

      <div className=" mb-6 py-4 border-b border-transparent 
        [border-image:linear-gradient(to_right,theme(colors.gray.500),theme(colors.gray.200),theme(colors.gray.500))_1]">

        <h2 className="font-bold text-gray-200 text-center cursor-pointer ">Material Dashboard</h2>

      </div>

      {tabs.map((tab)=>{
        return(
          <NavLink key={tab.id} to={tab.path} className={({ isActive }) =>
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
