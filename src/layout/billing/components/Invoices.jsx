import { FaFilePdf } from "react-icons/fa";
import { invoices } from "../data/invoicesData";

const Invoices = () => (
  <div className="bg-white rounded-xl p-5 shadow-sm h-full ">
    <div className="flex items-center justify-between mb-4">
      <h2 className="font-bold text-gray-700">Invoices</h2>
      <button className="border border-blue-500 text-blue-500 text-xs font-bold px-4 py-2 rounded-lg">
        VIEW ALL
      </button>
    </div>

    <ul>
      {invoices.map((item) => (
        <li key={item.id} className="flex items-center justify-between py-3">
          <div>
            <p className="text-sm font-bold text-gray-700">{item.date}</p>
            <p className="text-xs text-gray-400">{item.number}</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-500">{item.amount}</span>
            <button className="flex items-center gap-1 font-bold text-gray-700">
              <FaFilePdf /> PDF
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Invoices;