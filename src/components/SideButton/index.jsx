import React from 'react'
import { NavLink } from 'react-router-dom'

const SideButton = ({title, icon, link}) => {
  return (
    <NavLink to={link} className='flex gap-3 hover:bg-[#efcaaa] ease-linear duration-100 border-2 border-[#D69358] border-opacity-15 rounded-full lg:rounded-xl w-[30px] lg:w-full h-[30px] lg:h-[40px] cursor-pointer p-1 lg:px-3 lg:py-1 items-end'>
          <img
            src={icon}
            alt="zero"
            className="w-full lg:w-[30px] text-amber-400"
          />
          <p className="font-light hidden lg:inline-block">{title}</p>
        </NavLink>
  )
}

export default SideButton