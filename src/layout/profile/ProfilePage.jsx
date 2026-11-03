
import ProfileHeader from "./components/ProfileHeader"
import PlatformSettings from "./components/PlatformSettings"
import ProfileInfoCard from "./components/ProfileInfoCard"
import Conversations from "./components/Conversations"
import ProjectsSection from "./components/ProjectsSection"
const ProfilePage = () => {
  return (
   <div className="">

    <div className="h-56 md:h-72 rounded-xl bg-gradient-to-r from-blue-900 via-blue-600 to-sky-400" />

     <div className="-mt-8 mx-2 md:mx-4 bg-white rounded-xl shadow-lg p-4 md:p-6">
      <ProfileHeader />
      <div className="grid grid-cols-1 gap-8 mt-8 xl:grid-cols-3">
        <PlatformSettings />
        <div className="min-w-0 xl:border-l xl:pl-6"><ProfileInfoCard /></div>
        <div className="min-w-0 xl:border-l xl:pl-6"><Conversations /></div>
      </div>
      <ProjectsSection/>
    </div>

   </div>
  )
}

export default ProfilePage
