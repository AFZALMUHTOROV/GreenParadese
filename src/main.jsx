// Importando Dependencias
import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 
import { createBrowserRouter, RouterProvider } from "react-router-dom" 
import './i18n' 

// Importando todas as Rotas
import App from './App.jsx' 
import Error from "./routes/Error" 
import Home from "./routes/Home" 
import SignUp from './routes/SignUp' 
import Login from './routes/Login' 
import AppMobile from './routes/AppMobile' 
import Pilot from './routes/Pilot.jsx' 
import Races from './routes/Races' 
import RaceTrack from './routes/RaceTrack.jsx' 
import RacesTracks from './routes/RacesTracks.jsx' 
import Pilots from './routes/Pilots.jsx'
import Trackvision from './routes/Trackvision.jsx'
import Pricing from './routes/Pricing.jsx'
import Profile from './routes/Profile.jsx'
import Dashboard from './routes/Dashboard.jsx'

// Importando GlobalStyle
import GlobalStyle from "./styles/GlobalStyle" 
import './index.css'

// Criando Rotas
const router = createBrowserRouter ([
  // App e Error
  {path: '/', element: <App/>, errorElement: <Error/>,

    children:[
      // Home
      {path: '/', element: <Home/>}, 
      // SignUp
      {path: '/sign-up', element: <SignUp/>}, 
      // Login
      {path: '/login', element: <Login/>},
      // Races
      {path: '/uylar', element: <Races/>,}, 
      // RaceTrack
      {path: '/race-track', element: <RaceTrack/>,
        children: [
          // Pistas do RaceTrack
          {path: '/race-track/:slug', element: <RacesTracks/>} 
        ]},
      // Pilotos
      {path: '/pilots', element: <Pilot/>, 
        children: [
          // Pilotos especificos
          {path: '/pilots/:slug', element: <Pilots/>} 
        ]},
      // App Mobile
      {path: '/meneger', element: <AppMobile/>,
      },
      
      // Pricing
      {path: '/pricing', element: <Pricing/>},

      // TrackVision
      {path: '/malumotlar', element: <Trackvision/>},

      // Profile
      {path: '/profile', element: <Profile/>},
      
      // Dashboard
      {path: '/dashboard', element: <Dashboard/>},

    ]}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
    <GlobalStyle />
  </StrictMode>,
)