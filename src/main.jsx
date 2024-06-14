import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Suporte from './pages/Suporte.jsx';
import Avaliacao from './pages/Avaliacao.jsx';
import Recursos from './pages/Recursos.jsx';

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
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
