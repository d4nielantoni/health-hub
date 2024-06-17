import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Suporte from './pages/suporte/Suporte.jsx';
import Avaliacao from './pages/avaliacao/Avaliacao.jsx';
import Recursos from './pages/Recursos.jsx';
import Servicos from './pages/Servicos.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "suporte",
        element: <Suporte/>,
      },
      {
        path: "avaliacao",
        element: <Avaliacao/>
      },
      {
        path: "recursos",
        element: <Recursos/>
      },
      {
      path: "servicos",
      element: <Servicos/>
    }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
