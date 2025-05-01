import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root.jsx';
import Home from './Page/Home.jsx';
import Store from './Page/Store.jsx';
import About from './Components/Home/About.jsx';
// import ContactUs from './Page/ContactUs.jsx';
import Contact from './Page/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{
      path: "/",
      element: <Home />
    },
  {
    path:"/store",
    element:<Store/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
