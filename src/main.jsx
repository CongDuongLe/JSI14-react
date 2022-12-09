import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import PageNotFound from './components/weeklyLesson/Buoi7/children/PageNotFound'
import ResetPassword from './components/weeklyLesson/Buoi7/children/ResetPassword'
import SignIn from './components/weeklyLesson/Buoi7/children/SignIn'
import SignUp from './components/weeklyLesson/Buoi7/children/SignUp'
import './index.css'

// b1 : tạo 1 biến để chứa các route ( các page). trong này chứa các path là đường dẫn mong muốn của user


const routes = createBrowserRouter([
  {
    path: '/signIn',
    element: <SignIn />,
  },
  {
    path: '/signUp',
    element: <SignUp />,
  },
  {
    path: '/', // home page
    element: <App />,
  },
  {
    path : '*',
    element : <PageNotFound />
  },
  {
    path : '/resetPassword',
    element : <ResetPassword />
  }
])

  // với path = * thì khi người dùng nhập sai đường dẫn trong thanh url thì mặc định sẽ chuyển sang path *

// b3 : cần bọc trong 1 khối RouterProvider để bao bọc các component con


//b4 : để di chuyển qua lại thì mình cần : useNavigate(), với content trong useNavigate(content) là /pathName

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <RouterProvider router={routes} />
  </>
)
