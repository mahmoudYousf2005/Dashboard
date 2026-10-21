import { stats } from "../data/statsData";

const StatsCards = () => (
  <div className="grid gap-4 md:grid-cols-4 grid-cols-1 mt-10">
    {stats.map(({ id, title, value, color, percent, label, icon: Icon }) => (
      <div key={id} className="bg-white rounded-xl p-3">
        <div className="relative border-b border-black pb-4 mb-4 [border-image:linear-gradient(to_right,theme(colors.white),theme(colors.gray.200),theme(colors.white))_1]">
          <div className={`w-16 h-16 ${color} text-white rounded-xl flex justify-center items-center text-2xl absolute -top-8`}>
            <Icon />
          </div>
          <div className="text-right">
            <h3 className="text-gray-500">{title}</h3>
            <h2 className="font-extrabold text-xl text-gray-700">{value}</h2>
          </div>
        </div>

        <h2 className="text-gray-500">
          <span className="text-green-500">{percent}</span> {label}
        </h2>
      </div>
    ))}
  </div>
);

export default StatsCards;