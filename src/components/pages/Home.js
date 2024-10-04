import React, { Component } from 'react'
import BleakmoorIntroduction from '../features/Introduction'
import CaseLogs from '../features/CaseLogs'
import TwitchLive from '../features/TwitchLive'

export default class Home extends Component {
  render() {
    return (
      <div className='relative flex flex-col items-center h-full'>
        
        <div className='absolute w-4 h-full bg-slate-900 '/>

        <div className="relative flex flex-col space-y-28 mx-auto my-auto w-full h-auto items-center">
          <BleakmoorIntroduction/>
          <TwitchLive/>
          <CaseLogs/>
        </div>
      
      </div>
    )
  }
}
