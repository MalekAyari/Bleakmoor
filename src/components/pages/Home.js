import React, { Component } from 'react'
import HeroSection from '../features/HeroSection'
import BleakmoorIntroduction from '../features/Introduction'

export default class Home extends Component {
  render() {
    return (
      <div className='relative flex flex-col items-center my-24'>
        <div className='absolute w-3 h-full bg-gradient-to-t from-slate-800 via-slate-900 to-slate-800'/>
        <div className="relative flex flex-col space-y-28 pt-40 mx-auto my-auto w-full h-auto content-center">
          <BleakmoorIntroduction/>
          <div className='flex flex-col items-end'>
            <HeroSection/>
          </div>
          <div className='flex flex-col items-end'>
            <HeroSection/>
          </div>
        </div>
      </div>
    )
  }
}
