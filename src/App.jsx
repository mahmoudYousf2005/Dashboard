
import DashboardLayout from './examples/LayoutContainers/DashboardLayout'
import { Routes  , Route , Navigate} from 'react-router-dom'
import routes from "./routes"
function App() {

  const dashboardRoutes = routes.filter((r)=> r.type === "dashboard")
  const authRoutes = routes.filter((r)=> r.type === "auth")
  return (
    <Routes>

      <Route element={<DashboardLayout/>}> 

      {dashboardRoutes.map(({path , component}) =>(
        <Route key={path} path={path} element={component}/>
      ))}

    </Route>

    {authRoutes.map(({path , component}) =>(
      <Route key={path} path={path} element={component}/>
    ))}
      <Route path='/' element={<Navigate to={"/dashboard"} replace />} />
      <Route path='*' element={<Navigate to={"/dashboard"} replace />} />

    </Routes>
  
    
  )
}

export default App
