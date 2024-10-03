import React from 'react'

const NavButton = ({text, link}) => {
    return (
        <div className='w-full transition duration-500 ease-out relative group hover:translate-x-2 hover:ml-1 '>
            <span className='absolute  inset-0 bg-gradient-to-r from-slate-200 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out'></span>
            <a href={link} className='relative z-10 group-hover:text-slate-900 transition-colors duration-300 ease-out px-4 py-2'>{text}</a>
        </div>
    )
}

export default NavButton