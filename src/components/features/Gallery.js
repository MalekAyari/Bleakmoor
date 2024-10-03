import React, { Component } from 'react'
import '../../Styles.css';

export class Gallery extends Component {
  render() {
    return (
      <div className='fade-horizontal'>
        <div className='rounded-xl overflow-hidden -translate-y-8 w-[36rem] h-[19rem]'>
          <img
            src='media/articles/article-5.png'
            alt='article'
            className=''
          />
        </div>
      </div>
    )
  }
}

export default Gallery