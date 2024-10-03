import React, { Component } from 'react'
import ArticleEntry from '../features/ArticleEntry'
import BleakmoorIntroduction from '../features/Introduction'

export default class Home extends Component {
  render() {
    return (
      <div className='relative flex flex-col items-center h-full'>
        
        <div className='absolute w-2 h-full bg-gradient-to-t from-slate-800 via-slate-900 to-slate-800'/>

        <div className="relative flex flex-col space-y-28 mx-auto my-auto w-full h-auto content-center">
          <BleakmoorIntroduction/>
          <div className='h-full space-y-40 py-20 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 drop-shadow-xl'>
            <div className='flex flex-col w-full h-full'>
              <ArticleEntry 
                side='right' 
                title="Jack 'Dusty' Marlowe" 
                subTitle='The dust may settle, but he never will.' 
                header='Breaking News: A New Case Unfolds' 
                subHeader='Explore the dark alleys of Bleakmoor, where every shadow holds a secret.'
                article={5}
              />
            </div>
            <div className='flex flex-col items-end'>
              <ArticleEntry
                title="Homes aren't getting any safer"
                subTitle="Home Invaders are getting bolder"
                header='Homeowner Alerts Authorities After Chilling Discovery'
                subHeader="There was blood... but no sign of a struggle.” — Police investigate the disappearance of a local resident after strange clues emerge in the victim’s home"
                article={10}
              />
            </div>
            <div className='flex flex-col items-start'>
              <ArticleEntry
                side='right'
                title="Homes aren't getting any safer"
                subTitle="Home Invaders are getting bolder"
                header='Homeowner Alerts Authorities After Chilling Discovery'
                subHeader="There was blood... but no sign of a struggle.” — Police investigate the disappearance of a local resident after strange clues emerge in the victim’s home"
                article={10}
              />
            </div>
          </div>
        </div>
      
      </div>
    )
  }
}
