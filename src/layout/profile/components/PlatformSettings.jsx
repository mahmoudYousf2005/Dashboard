import { settings } from "../data/settingsData"
import { Switch } from "@/components/ui/switch"
const PlatformSettings = () => {
  return (
    <div className="min-w-0">
        <h2 className="font-bold text-gray-700">Platform Settings</h2>
        {settings.map(({title , items})=>(
            <div key={title} className="mt-6">
                <p className="text-xs font-bold text-gray-400 uppercase mb-3">{title}</p>
               
                <ul className="space-y-4">
                    {items.map((item)=>(
                        <li key={item.id} className="flex items-start gap-4">
                            <Switch  checked={item.enabled}/>
                            <h1 className="text-sm text-gray-500">{item.label}</h1>
                        </li>

                    ))}
                </ul>

            </div>
        ))}
    </div>
  )
}

export default PlatformSettings