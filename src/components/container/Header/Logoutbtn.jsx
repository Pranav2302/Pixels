import React from 'react'
import { useDispatch } from 'react-redux';
import authService from "../../../appwrite/auth"
import { logout } from '../../../authslice';
function Logoutbtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full text-white"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default Logoutbtn;