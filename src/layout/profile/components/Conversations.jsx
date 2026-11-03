import { conversations } from "../data/conversationsData";

const Conversations = () => (
  <div>
    <h2 className="font-bold text-gray-700">Conversations</h2>

    <ul className="mt-6 space-y-5">
      {conversations.map((item) => (
        <li key={item.id} className="flex items-center gap-4">
          <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover shadow-md shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-700">{item.name}</p>
            <p className="text-xs text-gray-400 truncate">{item.message}</p>
          </div>
          <button className="text-xs font-bold text-blue-500">REPLY</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Conversations;