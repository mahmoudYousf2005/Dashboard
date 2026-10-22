import { FaArrowDownLong } from "react-icons/fa6";
import { orders } from "../data/ordersData";

const OrdersOverview = () => (
  <div className="bg-white rounded-xl p-4 h-full md:mt-0">
    <div className="my-6">
      <h2 className="font-bold text-xl">Orders overview</h2>
      <div className="flex gap-2 mt-2">
        <FaArrowDownLong className="text-green-500" />
        <h3 className="text-gray-400">24% this month</h3>
      </div>
    </div>

    <ul className="mt-10">
      {orders.map(({ id, title, date , icons:Icon , color}, i) => (
        <li key={id} className="relative flex gap-6 pb-4">         
          <div className={`w-8 h-8 shrink-0 rounded-full ${color} flex items-center justify-center text-white z-10`}>
            <Icon className=" text-lg"/>
          </div>
          <div>
            <p className="font-semibold text-sm">{title}</p>
            <p className="text-sm text-gray-400 mt-1">{date}</p>
          </div>
           {i !== orders.length - 1 && (
            <span className="absolute left-4 top-1 bottom-0 w-[2px] bg-gray-300" />
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default OrdersOverview;