import React from 'react';
import {Navigate} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import HomeBanner from '../pages/HomeBanner';
import HomeProduce from '../pages/HomeProduce';
import Profile from '../pages/Profile';
import Detail from '../pages/Detail';

const NotFound = React.lazy(() => import('../pages/NotFound'));

export default [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Navigate to="/home/banner" />,
      },
      {
        path: '/home/banner',
        element: <HomeBanner />,
      },
      {
        path: '/home/produce',
        element: <HomeProduce />,
      },
    ],
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
