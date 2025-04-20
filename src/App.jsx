// Importando Dependencias
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect  } from "react";

// Importando Componentes
import Nav from "./components/Nav"
import Footer from "./components/Footer" 
import Loading from './components/Loading'


function App() {

  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading ? (<Loading />) : 
      ( <>
          <Nav/>
          <Outlet/>
          <Footer/>
        </>
      )}
    </>
  )
}

export default App
