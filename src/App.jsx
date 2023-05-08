import React from 'react';
import {useDispatch} from 'react-redux';
import dayjs from 'dayjs';
import {logout} from './app/features/user/userSlice';
import TokenService from './services/token.service';
import {RouterProvider} from 'react-router-dom';
import router from './router/router';

function App() {
  const user = TokenService.getUser() || null;
  const dispatch = useDispatch();
  if (user) {
    if (dayjs.unix(user.RefreshTokenExpiresUtc).diff(dayjs()) < 1) {
      dispatch(logout());
    }
  }
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
