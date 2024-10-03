import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className=' h-20 bottom-0 bg-slate-800'>
        <div className='w-full h-[1px] bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800'/>
        <div className='text-slate-50 font-FrontageRegular text-md '>
          Footer
        </div>
      </div>
    )
  }
}
