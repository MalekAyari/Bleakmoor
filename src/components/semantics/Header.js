import React, { Component } from 'react'
import HeaderButton from '../features/HeaderButton'

export default class Header extends Component {
  render() {
    return (
      <div>

        <div className='shadow-inner shadow-slate-500 mb-10 bg-gradient-to-tr from-slate-700 to-slate-500 drop-shadow-xl items-center absolute flex center align-center justify-between top-5 w-screen font-BettyNoir text-2xl '>

            <div className='shadow-inner rounded-sm shadow-slate-700 w-[20.5%] bg-gradient-to-r from-slate-900 to-slate-800  pl-14 pt-2 pb-2 text-left align-center '>
              <p className='text-4xl text-slate-100'>Bleakmoor</p>
              <p className='text-2xl text-slate-400'>A Playground for the damned</p>
            </div>

            {/*Banner*/}
            <div className='flex justify-center items-center space-x-10 px-20 rounded-l-xl shadow-md shadow-slate-800 text-white bg-gradient-to-tr from-slate-900 to-slate-800 h-12'>
              <HeaderButton text={"Home"} link={"/"}/> 
              <HeaderButton text={"About Me"} link={"/about"}/> 
              <HeaderButton text={"Jack 'Dusty' Marlowe"} link={"/dusty"}/> 
              <HeaderButton text={"Join The Cavalry"} link={"/join"}/> 
              <HeaderButton classname='pl-16' text={"Login"} link={"/login"}/> 
              
            </div>


          </div>

      </div>
    )
  }
}