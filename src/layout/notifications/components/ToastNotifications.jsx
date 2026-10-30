import { toastNotifications } from "../data/toastNotificationsData"
const ToastNotifications = () => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm md:w-8/12 mx-auto mt-4">
      <h2 className="font-bold text-xl text-gray-700 capitalize mb-2">notifications</h2>
      <p className="text-gray-400">Notifications on this page use Toasts from Bootstrap. Read more details here.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        {toastNotifications.map((item)=>(
            <div key={item.id} className={`${item.color} ${item.hoverShadow} px-6 py-2
            rounded-xl text-center text-white uppercase font-bold`}>
                <h2>{item.label}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ToastNotifications
