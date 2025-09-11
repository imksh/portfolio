import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from './components/layouts/AppLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);
  const router = createBrowserRouter([ 
    {
    path: "/",
    element : <AppLayout />,
    children : 
    [
      {
        path:"/",
        element : <Home />
      },
      {
        path:"/about",
        element : <About />
      },
      {
        path:"/myportfolio",
        element : <Portfolio />
      },
      {
        path:"/contact",
        element : <Contact />
      }
    ]
    
  }
]
)

  return <RouterProvider router={router} />
}

export default App
