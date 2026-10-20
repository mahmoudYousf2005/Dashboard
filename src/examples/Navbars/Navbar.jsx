// import icons
import { FaUserCircle } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { IoMenu , IoClose} from "react-icons/io5";
const Navbar = ({open ,setOpen}) => {

  return (
    <div className="p-4 flex flex-col md:flex-row md:justify-between">

        <div className="">

            <div className="flex items-center text-gray-500  ">
                <IoMdHome className="text-lg "/>
            <h3 className="mx-1 ">/</h3>
            <h3>Dashboard</h3>
            </div>
            <h2 className="font-bold text-gray-700 text-lg">Dashboard</h2>
        </div>

        <div className="flex items-center gap-6 justify-between md:mt-0 mt-2">

        <div className="">
            <input
            className="bg-gray-100 px-1.5 py-2.5 border border-gray-300
            font-medium text-gary-900 rounded-lg outline-none w-48"
            type="text" placeholder="Search hero" />
            </div>

            <div className="flex gap-4 text-gray-500 text-lg ">
            
            
            <button aria-label="Account"><FaUserCircle /></button>

            {open ? 
                <button aria-label="Open menu"
                className="md:hidden"
                onClick={()=> setOpen(false)}
                ><IoClose /></button>
                :
                <button aria-label="Open menu"
                className="md:hidden"
                onClick={()=> setOpen(true)}
                ><IoMenu /></button>
            }
            
            <button aria-label="Theme"><FaSun /></button>
            <button aria-label="Notifications"><FaBell /></button>
        
            </div>

        </div>

    </div>
  )
}

export default Navbar