
import { MdDelete, MdEdit } from "react-icons/md";
import { billingInfo } from "../data/billingInfoData";
const BillingInformation = () => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm md:mt-0 mt-4">
      <h2 className="font-bold text-gray-700 mb-4 capitalize">billing information</h2>

      <div className="flex flex-col gap-5">
        {billingInfo.map((item)=>(
          <div key={item.id} className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between gap-2">
              <h3>{item.name}</h3>
              <div className="flex gap-6 text-xs font-bold">
                <button className="flex items-center gap-1 text-red-500">
                  <MdDelete /> DELETE
                </button>
                <button className="flex items-center gap-1 text-gray-700">
                  <MdEdit /> IDIT
                </button>
              </div>
            </div>
            <dl className="mt-4 text-xs space-y-1">
            <div className="flex gap-3">
              <dt className="text-gray-400">Company Name:</dt>
              <dd className="font-bold text-gray-700">{item.company}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-gray-400">Email Address:</dt>
              <dd className="font-bold text-gray-700">{item.email}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-gray-400">VAT Number:</dt>
              <dd className="font-bold text-gray-700">{item.vat}</dd>
            </div>
          </dl>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BillingInformation
