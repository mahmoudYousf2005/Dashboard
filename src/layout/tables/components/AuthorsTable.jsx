
import {authors} from "../data/authorsData"
const AuthorsTable = () => {
    
  return (
    <div className="p-4 bg-white rounded-xl mt-10">
      <div className="flex items-center px-6 h-20 text-white font-bold bg-blue-500 rounded-lg -mt-8 shadow-lg">
        Authors Table
      </div>
      <div className="overflow-x-auto p-4">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr>
              <th className="w-[50%] text-gray-400 text-xs uppercase py-3 px-4">                                       
                authors                     
              </th>
              <th  className="text-gray-400 text-xs uppercase py-3 px-4 ">                                       
                fancation                     
              </th>
              <th  className="text-gray-400 text-xs uppercase py-3 px-4 ">                                       
                status                     
              </th>
              <th  className="text-gray-400 text-xs uppercase py-3 px-4 ">                                       
                employed                     
              </th>
              <th  className="text-gray-400 text-xs uppercase ">                                       
                action                     
              </th>
            </tr>
          </thead>

          <tbody>      
              {authors.map((item)=>(
                <tr key={item.id} className="border-t border-gray-100 py-3">
                  {/* authors */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-semibold text-gray-700">{item.name}</p>
                        <p className="text-xs text-gray-400">{item.email}</p>
                      </div>
                    </div>
                  </td>
                  {/* fancation */}
                  <td className="px-4 py-3">
                    <span className="text-sm font-semibold text-gray-700 block">{item.job}</span>
                    <span className="text-xs text-gray-400">{item.department}</span>
                  </td>
                  {/* status */}
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold text-white uppercase ${item.online ? "bg-green-500" : "bg-black"}`} >
                      {item.online ? "online" : "offline"}
                    </span>
                  </td>
                  {/* employed */}
                  <td className="px-4 py-3 text-sm text-gray-500 font-semibold">{item.employed}</td>
                  {/* action */}
                  <td className="px-4 py-3">
                    <button className="text-xs text-gray-500 capitalize font-bold hover:text-gray-500">
                      edit
                    </button>
                  </td>
                </tr>
              ))}           
          </tbody>
            
        </table>
      </div>

    </div>
  )
}

export default AuthorsTable
