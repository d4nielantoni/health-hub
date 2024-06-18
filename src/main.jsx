import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import Home from './pages/Home.jsx';
import Profile from './pages/Profile'
import EditarPerfil from './pages/EditarPerfil'



import Suporte from './pages/suporte/Suporte.jsx';
import Avaliacao from './pages/avaliacao/Avaliacao.jsx';
import Agendamentos from './pages/sessaoAoVivo/Agendamentos.jsx';
import Recursos from './pages/Recursos.jsx';
import Servicos from './pages/Servicos.jsx';
import Login from './pages/Login/Login.jsx';
import Registro from './pages/Registro/Registro.jsx';
import Blog from './pages/blog/Blog.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "suporte",
        element: <Suporte />,
      },
      {
        path: "avaliacao",
        element: <Avaliacao/>
      },
      {
        path: "sessoes",
        element: <Agendamentos/>
      },
      {path:"login",

        path: "profile",
        element: <Profile/>
      },
      {
        path: "editarperfil",
        element: <EditarPerfil/>
      },
      {
        path: "",
        element: <Home/>
      },
        {path:"login",
        element: <Login/>
      },
      {
        path:"registro",
        element:<Registro/>
      },
      {
        path: "recursos",
        element: <Recursos/>
      },
      {
      path: "servicos",
      element: <Servicos/>
    }
    ,
    {
        path: "blog",
        element: <Blog />
      },
      {
        path: "recursos",
        element: <Recursos/>
      }
  
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
