import React from 'react'
import { NavLink } from 'react-router-dom'

const SideButton = ({title, icon, link}) => {
  return (
    <NavLink to={link} className='flex gap-3 border-[#D69358] border-opacity-15 hover:bg-[#efcaaa] ease-linear duration-100 border-2 cursor-pointer px-3 py-1 rounded-xl items-end'>
          <img
            src={icon}
            alt="zero"
            className="w-[30px] text-amber-400"
          />
          <p className="font-light">{title}</p>
        </NavLink>
  )
}

export default SideButton