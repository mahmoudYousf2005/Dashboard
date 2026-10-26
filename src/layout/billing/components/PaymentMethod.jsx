import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { paymentMethods } from "../data/paymentMethodsData";

const PaymentMethod = () => (
  <div className="bg-white rounded-xl p-5 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <h2 className="font-bold text-gray-700">Payment Method</h2>
      <button className="flex items-center gap-2 bg-gray-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg">
        <FaPlus /> ADD NEW CARD
      </button>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      {paymentMethods.map((item) => (
        <div key={item.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-5">
          <div className="flex items-center gap-4">
            <item.icon className={`text-3xl ${item.color}`} />
            <p className="font-semibold text-gray-700">**** **** **** {item.last4}</p>
          </div>
          <button aria-label="Edit card" className="text-gray-700">
            <MdEdit />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default PaymentMethod;