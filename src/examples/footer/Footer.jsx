import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center my-4 w-full "
       >


         <div className="text-gray-400 font-semibold flex flex-col md:flex-row items-center justify-center gap-2 py-4 text-center"
          >
      
            <p className="flex flex-wrap items-center justify-center gap-1">
                <span>© 2026, made with</span>

                <FaHeart className="text-gray-500" />

                <span>by</span>

                <span className="text-gray-500 font-bold cursor-pointer">
                Creative Tim
                </span>

                <span>for a better web.</span>
            </p>

        </div>


        <div className={`flex gap-6 font-semibold  text-gray-400  md:mt-0 mt-6 justify-center`}>
            <h3>Creative Tim</h3>
            <h3>About Us</h3>
            <h3>Blog</h3>
            <h3>License</h3>
        </div>

    </div>
  )
}
// grid grid-cols-1 md:grid-cols-2 
export default Footer
