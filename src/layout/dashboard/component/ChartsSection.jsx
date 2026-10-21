import { IoTimeOutline } from "react-icons/io5";
import Line from "./LineChartData";
import { charts } from "../data/chartsData";

const ChartsSection = () => (
  <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
    {charts.map((chart)=>(
        <div key={chart.id} className="bg-white p-4 rounded-xl mt-8 md:mt-0">
            <div className={`${chart.color} -mt-10 rounded-lg shadow-lg h-40 p-1`}>
                <Line />
            </div>
            
            <div className="mt-8 px-2">

               <div className="border-b-2 pb-4 [border-image:linear-gradient(to_right,theme(colors.white),theme(colors.gray.200),theme(colors.white))_1]">
                    <h2>{chart.title}</h2>
                    <h3>{chart.description}</h3>
                </div> 

               <div className="flex gap-4 items-center mt-6 text-gray-400 mb-1">
                    <IoTimeOutline />
                    <h3>{chart.footer}</h3>
                </div> 

            </div>

        </div>
    ))}
  </div>
);

export default ChartsSection;
