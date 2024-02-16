import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../slice/userReducer";

export const Account = () => {
    const dispatch = useDispatch()
    const handleLogout=()=>{
        localStorage.removeItem('user')
        dispatch(removeUser())
    }
  return (
    <div className="flex items-center pt-3 lg:start-[20vw] flex-col lg:relative lg:w-[75vw]">
      <p className=" cursor-pointer p-2 border" onClick={handleLogout}>LogOut</p>
    </div>
  );
};
