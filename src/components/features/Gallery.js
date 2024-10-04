import React from 'react'
import '../../Styles.css';

const Gallery = ({number}) => {
  
    return (
      <div className='fade-vertical'>
        <div className='rounded-xl overflow-hidden -translate-y-8 w-[%]'>
          <img
            src={`media/articles/${number}.png`}
            alt='article'
            className=''
          />
        </div>
      </div>
    )
  }

export default Gallery