import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Suporte from './pages/suporte/Suporte.jsx';
import Avaliacao from './pages/avaliacao/Avaliacao.jsx';
import Login from './pages/Login/Login.jsx';
import Registro from './pages/Registro/Registro.jsx';
import Blog from './pages/blog/Blog.jsx';
import Recursos from './pages/Recursos.jsx';

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
        path:"login",
        element: <Login/>
      },
      {
        path:"registro",
        element:<Registro/>
      },
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
