import { income } from "../data/incomeData"

// import { income } from "../data/incomeData"
const IncomeCards = () => {
  return (
    <div className="flex gap-4">
      {income.map((item)=>(
        <div key={item.id} className="text-center bg-white p-5 rounded-xl shadow-sm w-full">
            <div className="flex items-center justify-center mx-auto w-16 h-16 bg-blue-500 text-white text-2xl rounded-xl">
                <item.icon/>
            </div>
            <h3 className="font-bold text-gray-700 mt-4">{item.title}</h3>
            <p className="text-xs text-gray-400 mt-1">{item.subtitle}</p>
            <hr className="my-4 border-gray-100" />
            <p className="font-bold text-lg text-gray-700">{item.amount}</p>
        </div>
      ))}
    </div>
  )
}

export default IncomeCards
