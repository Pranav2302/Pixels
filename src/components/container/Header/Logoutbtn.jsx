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
      className="px-4 py-2 rounded-full bg-card text-textPrimary font-medium transition-all duration-200 hover:bg-primary/10"
      onClick={logoutHandler}
    >
      Logout
    </button>
  )
}

export default Logoutbtn;