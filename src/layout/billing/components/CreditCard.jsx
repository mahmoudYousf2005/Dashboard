import { MdWifi } from "react-icons/md";

const CreditCard = ({ number = "4562 1122 4594 7852", holder = "Jack Peterson", expires = "11/22" }) => (
  <div className="rounded-xl p-5 text-white shadow-lg bg-gradient-to-br
   from-gray-700 via-gray-900 to-black min-h-[220px] flex flex-col justify-between">
    <MdWifi className="text-2xl "/>
    <p className="text-xl font-bold tracking-widest">{number}</p>
    <div className="flex justify-between items-end">
        <div className="flex gap-6">
            <div className="">
                <p className="text-xs text-gray-400 capitalize">card Holder</p>
                <p className="font-bold">{holder}</p>
            </div>
            <div className="">
                <p className="text-xs text-gray-400 capitalize">Expires</p>
                <p className="font-bold">{expires}</p>
            </div>
        </div>
        <div className="flex">
            <span className="w-7 h-7 rounded-full bg-red-500"></span>
            <span className="w-7 h-7 rounded-full bg-orange-500 -ml-2 opacity-90"></span>
        </div>
    </div>
  </div>
);

export default CreditCard;

