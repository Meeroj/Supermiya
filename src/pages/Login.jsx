import React, { useState } from "react";
import Logo from "../../public/img/logo.png";
import { useDispatch } from "react-redux";
import { setUser } from "../slice/userReducer";

const Login = () => {
  const dispatch = useDispatch()
  const [emailValue, setEmailValue]= useState('')
  const [passwordValue, setPasswordValue]= useState('')
  const handleSubmit=()=>{
      dispatch(setUser())
      const user= {emailValue, passwordValue}
      localStorage.setItem('user', JSON.stringify(user))
  }
  return (
    <section className="bg-gradient-to-br from-amber-200 to-purple-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
        <div className="md:w-1/2 px-8 md:px-16">
          <img src={Logo} className="m-3 ms-0" alt="" />
          <form onSubmit={handleSubmit} className="flex flex-col gap-7 mt-[7vh]">
            <input
              className="p-2 mt-8 rounded-xl border outline-amber-400"
              type="text"
              name="Username"
              placeholder="Istalgan ma'lumot yozing"
              value={emailValue}
              onChange={(e)=>setEmailValue(e.target.value)}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full outline-amber-400"
                type="password"
                name="password"
                placeholder="Password"
                value={passwordValue}
                onChange={(e)=>setPasswordValue(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <button className="bg-amber-500 rounded-xl text-white py-2 hover:scale-105 duration-300" type="submit">
              Login
            </button>
          </form>
        </div>

        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://1.bp.blogspot.com/-AUP7I-SIFSc/Vj8WYdDUFaI/AAAAAAAACJU/MehpMYr63lM/w768-h1366-c-d/hd-light-spheres-galaxy-note-hd-wallpaper.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
