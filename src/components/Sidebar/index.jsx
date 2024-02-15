import React, { useState, useEffect } from "react";
import SideButton from "../SideButton";
import Clock from "../clock";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from '../../../public/img/logo.png'
import Binar from '../../../public/img/binar.svg'
import Card from '../../../public/img/card.svg'
import Face from '../../../public/img/face.svg'
import Home from '../../../public/img/home.svg'
import User from '../../../public/img/user.svg'
import Square from '../../../public/img/0-square.svg'

const Sidebar = () => {
  const { isNumberStart } = useSelector((state) => state.number);
  return (
    <div className="flex lg:flex-col lg:w-[20vw] justify-between lg:justify-start items-end lg:items-start w-[100vw] lg:h-full fixed px-4 py-1 bottom-0 lg:py-3 sidebar z-50">
          <div>
            <div className="gap-3 items-center mb-3 hidden lg:flex">
              <Link to={'/'}><img src={Logo} alt="Logo" className="w-[200px]" /></Link>
            </div>
            <hr className="border-[#D69358]" />
          </div>
      {isNumberStart ? (
        <>
          <div className="hidden lg:block h-full items-center">
            <Clock />
          </div>
        </>
      ) : (
        <>
          
            <div className="flex lg:flex-col justify-evenly w-full  lg:mt-3 gap-2">
              <SideButton link={"/"} icon={Home} title={"Home"} />
              <SideButton
                link={"/speed-number"}
                icon={Square}
                title={"Speed number"}
              />
              <SideButton
                link={"/find-face"}
                icon={Face}
                title={"Find face"}
              />
              <SideButton
                link={"/binar-number"}
                icon={Binar}
                title={"Binary Number"}
              />
              <SideButton
                link={"/card"}
                icon={Card}
                title={"Find card"}
              />
            </div>
         
        </>
      )}
          <div className="flex gap-3 items-center lg:absolute bottom-3">
            <div className="w-[30px] lg:w-[50px] rounded-full border-2 border-[#D69358]">
              <img src={User} alt="" />
            </div>
            <div className="hidden lg:block">
              <p className="text-xl">Meeroj</p>
              <p className="text-sm text-[#D69358]">online</p>
            </div>
          </div>
    </div>
  );
};

export default Sidebar;
