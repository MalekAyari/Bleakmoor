import React from 'react';
import Gallery from './Gallery';

const ArticleEntry = ({
    side = 'left', 
    header = 'Header',
    subHeader = 'Sub Header', 
    title = 'Title', 
    subTitle= 'Sub Title', 
    article = 5,
    buttonLink
  }) => {
  
    const isLeft = side === 'left';
    const flexDirection = isLeft ? 'flex-row' : 'flex-row-reverse'
    const borderRadius = isLeft ? "rounded-l-3xl" : 'rounded-r-3xl'
    const gradient = isLeft ? "from-slate-950 to-slate-700" : "from-slate-700 to-slate-950"

    return (
      <div className="relative w-[80%] h-60 bg-cover">
        <div className={`absolute ${borderRadius} inset-0 bg-gradient-to-r shadow-xl shadow-slate-900 ${gradient}`}/> {/* Overlay for readability */}
        <div className={`flex ${flexDirection} space-x-12 justify-center h-full`}>
          <Gallery number={article}/>
          <div className="relative font-CourierPrimeRegular flex flex-col items-start space-y-8 justify-center h-full text-white text-left">
            <div className='flex flex-col items-start'>
              <h1 className="text-6xl font-Oswald tracking-normal uppercase">
                {title}
              </h1>
              <p className="mt-4 text-xl">
                {subTitle}
              </p>
            </div>
            <div className='flex flex-col items-start'>
              <h2 className="text-4xl leading-tight line-clamp-1">
                {header}
              </h2>
              <p className="mt-2 text-lg overflow-ellipsis line-clamp-1">
                {subHeader}
              </p>
                <button onClick={() => buttonLink && window.location.assign(buttonLink)} className="active:scale-95 mt-6 px-6 py-3 bg-slate-500 text-white rounded-lg shadow-lg hover:bg-slate-600 transition duration-300">
                  Join the Investigation
                </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ArticleEntry;
