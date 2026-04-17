
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import LayoutPage from './pages/LayoutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import SignUpPage from "./pages/SignUpPage.jsx";
import Login from "./pages/Login.jsx";




const routers= createBrowserRouter([
  {
    path:"/",
    element: <LayoutPage/>,
    children:[
      {
        path:"",
        element:<HomePage/>
      },
      {
        path:"/About",
        element:<AboutPage/>
      },
      {
        path:"/Services",
        element:<ServicesPage/>
      },
      {
        path:"/Contact",
        element:<ContactPage/>
      },
      {
        path:"/Signup",
        element:<SignUpPage/>,
      },
      {
        path:"/login",
        element:<Login/>
     }
      
      
      
    ]
  }
  
])
function App() {
  return (
   <RouterProvider router={routers}/>
   
  )
}

export default App

