import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
<<<<<<< HEAD

import Suporte from './pages/suporte/Suporte.jsx';
import Avaliacao from './pages/avaliacao/Avaliacao.jsx';

=======
import Suporte from './pages/Suporte.jsx';
import Avaliacao from './pages/Avaliacao.jsx';
import Blog from './pages/blog/Blog.jsx';
>>>>>>> 2efd3ba85538ca2b05a47d1d1b8123bb4fe86c92

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
<<<<<<< HEAD
        element: <Avaliacao/>
      },
      {
        path: "recursos",
        element: <Recursos/>
=======
        element: <Avaliacao />
      },
      {
        path: "blog",
        element: <Blog />
>>>>>>> 2efd3ba85538ca2b05a47d1d1b8123bb4fe86c92
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
