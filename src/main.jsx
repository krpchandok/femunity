import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserInfo from './UserInfo'
import Header from './components/custom/Header'
import { Toaster } from './components/ui/toaster'
import SimilarUsers from './SimilarUsers'
import ChatForum from './ChatForum'
import Chatroom from './Chatroom'
import About from './about'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/user-info',
    element: <UserInfo />
  },
  {
    path:'/user-info/similar-users',
    element: <SimilarUsers />
  },
  {
    path:'/resources',
    element:<ChatForum />
  },
  {
    path:'/chat',
    element:<Chatroom />
  },
  {
    path:'/about-us',
    element:<About />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster/>
    <RouterProvider router={router} />
  </StrictMode>,
)
