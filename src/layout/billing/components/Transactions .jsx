import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdPriorityHigh } from "react-icons/md";
import { transactions } from "../data/transactionsData";

const types = {
    out:{Icon:MdKeyboardArrowDown , ring:"border-red-500 text-red-500" , amount:"text-red-500"},
    in:{Icon:MdKeyboardArrowUp , ring:"border-green-500 text-green-500" , amount:"text-green-500"},
    pending:{Icon:MdPriorityHigh , ring:"border-gray-700 text-gray-700" , amount:"text-gray-700"}
}
const Transactions  = () => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm ">
        <div className="flex items-center justify-between">
            <h2 className="font-bold text-gray-700 capitalize">your transaction&apos;s</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaRegCalendarAlt /> 23 - 30 March 2020
            </div>
        </div>

        {transactions.map(( {label, items})=>(
            <div key={label} className="mb-4">
                <p className="text-xs font-bold text-gray-400 uppercase my-3">{label}</p>
                <ul className=" space-y-4">
                    {items.map((item)=>{
                        const  {Icon , ring , amount:amountClass} = types[item.type]
                        return(
                            <li key={item.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xl ${ring}`}>
                                        <Icon />
                                    </div>
                                    <div className="">
                                        <p className="text-sm font-bold text-gray-700">{item.name}</p>
                                        <p  className="text-xs text-gray-400">{item.date}</p>
                                    </div>
                                </div>
                                <span className={`text-sm font-bold whitespace-nowrap ${amountClass}`}>{item.amount}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Transactions 
