import React from 'react';

const BleakmoorIntroduction = () => {
  return (
    <div className="relative flex flex-col items-center h-[16rem] bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-newspaper-image.jpg')" }}>
      <div className="absolute rounded-[6rem] w-[80%] h-full bg-slate-900 drop-shadow-2xl  "/> {/* Overlay for readability */}
      <div className='flex justify-center m-auto'>
        <div className="w-[70%] font-RobotoSlab relative flex flex-col items-center space-y-4 justify-center h-full text-white overflow-hidden">
            <div>
                <h1 className="text-5xl font-FrontageOutline uppercase">
                    Welcome to BleakMoor
                </h1>
            </div>
            
            <div className='w-full h-[1px] bg-gradient-to-r from-slate-900 via-slate-200 to-slate-900'></div>
            
            <div>
                <p className="text-xl text-center">
                    A city shrouded in shadows and secrets, Bleakmoor is a haven for those who thrive on the edge of morality.
                    With its rain-soaked streets and flickering streetlamps, this noir landscape is home to mysteries waiting to be uncovered.
                </p>

                <div className='w-full h-[1px] my-4 bg-gradient-to-r from-slate-900 via-slate-200 to-slate-900'></div>
                
                <p className="text-xl text-center">
                    Dive deep into the dark alleys, where every corner tells a story, and every resident has a secret. Will you uncover the truth or become a part of the city's fabric of deceit?
                </p>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default BleakmoorIntroduction;
