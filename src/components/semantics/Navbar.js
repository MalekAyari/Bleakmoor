import React, { Component } from 'react'
import NavButton from '../features/NavButton'

export default class Navbar extends Component {
  render() {
    return (
      <div className='w-[20%] h-screen bg-slate-900 shadow-xl shadow-slate-950 text-slate-200 font-BettyNoir'>
        <div className='mt-40 text-3xl flex flex-col items-start space-y-5'>
          <NavButton text={"Click Me"} link={"/"}/>
          <NavButton text={"No me"} link={"/"}/>
          <NavButton text={"I'm here too"} link={"/"}/>
          
        </div>
      </div>
    )
  }
}
