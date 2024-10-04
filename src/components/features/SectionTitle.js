import React from 'react'

const SectionTitle = ({sectionName}) => {
    
  return (
    <div className='top-0 left-0 h-8'>
        <div className='w-[20%] py-3 rounded-br-full translate-x-[20%] -translate-y-[50%] bg-gradient-to-tr from-slate-950 to-slate-700 shadow-lg shadow-slate-950'>
            <h1 className='font-FrontageBold text-4xl'>
                {sectionName}
            </h1>
        </div>
    </div>
  )
}

export default SectionTitle