import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Suporte from './pages/Suporte.jsx';
import Avaliacao from './pages/Avaliacao.jsx';
=======
import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Suporte from './pages/suporte/Suporte.jsx';
import Avaliacao from './pages/avaliacao/Avaliacao.jsx';
>>>>>>> 8f1ef454196676e2c3c212e1e063e90fcaa2beea


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
