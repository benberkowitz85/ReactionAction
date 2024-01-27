import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// importing components
import Contact from './components/Contact.jsx' 
import About from './components/About.jsx'
import Resume from './components/Resume.jsx'
import Portfolio from './components/Portfolio.jsx'

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        // index is the default route. It will be rendered if no other route matches. 
        index: true,
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
    ],
  },
]);

// This is the root of our app. We render our Router and pass it our BrowserRouter.
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={BrowserRouter} />
);