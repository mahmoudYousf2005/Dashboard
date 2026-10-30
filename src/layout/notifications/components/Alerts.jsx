import { alert } from "../data/alertsData"
const alerts = () => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm md:w-8/12 mx-auto mt-4">
      <h2 className="font-bold  text-gray-700 capitalize text-xl mb-6">alert</h2>
      <div className=" space-y-2">
        {alert.map((item)=>(
            <div key={item.id} className={`flex items-center justify-between px-4 py-3 rounded-xl text-gray-200  ${item.color}`}>
                <p className="font-bold">{item.name}</p>
                <button>
                    <item.icon />
                </button>
                
            </div>
        ))}
      </div>
    </div>
  )
}

export default alerts
