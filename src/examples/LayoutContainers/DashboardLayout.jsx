import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbars/Navbar"
import Sidenav from "../Sidenav/Sidenav"
import Footer from "../footer/Footer"

const DashboardLayout = () => {
    const [open , setOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-100">
        <Sidenav open={open} setOpen={setOpen} />
         <div className="md:pl-72 px-4 pt-6">
        <Navbar setOpen={setOpen} />
        <Outlet />
        <Footer />
        
      </div>
    </div>
  )
}

export default DashboardLayout
