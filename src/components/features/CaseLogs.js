import React from 'react'
import ArticleEntry from './ArticleEntry'
import SectionTitle from './SectionTitle'

const CaseLogs = () => {
  return (
    <div className=' h-full space-y-20 pb-20 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 drop-shadow-xl'>
        <SectionTitle
            sectionName="Case Files:"
        />
        <div className='flex flex-col'>
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
                subHeader="”There was blood... but no sign of a struggle.” — Police investigate the disappearance of a local resident after strange clues emerge in the victim’s home"
                article={10}
            />
        </div>
        <div className='flex flex-col'>
            <ArticleEntry
                side='right'
                title="A Night to Remember"
                subTitle="Missing Person Case Takes a Grim Turn"
                header='Witness Claims to Hear Screams from the Abandoned Warehouse'
                subHeader="”It wasn’t just one voice... it was many, all crying for help.” — Investigators focus on the eerie echoes in Bleakmoor’s industrial district"
                article={11}
            />
        </div>
    </div>
  )
}

export default CaseLogs