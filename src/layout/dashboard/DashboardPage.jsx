import StatsCards from "./component/StatsCards"
import ChartsSection from "./component/ChartsSection"
import ProjectsOverview from "./component/ProjectsOverview"
import OrdersOverview from "./component/OrdersOverview"
const DashboardPage = () => {
  return (
    <div>
      <StatsCards/>
      <ChartsSection/>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-[2fr_1fr] mt-6">
        <ProjectsOverview/>
        <OrdersOverview/>
      </div>
      
    </div>
  )
}

export default DashboardPage
