import React, { Component } from 'react';
import HeaderButton from '../features/HeaderButton';
import Navbar from './Navbar';
import NavButton from '../features/NavButton';

export default class Header extends Component {
  state = {
    isOpen: false,
  };

  toggleUnfold = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  handleClickOutside = (event) => {
    if (this.dropdownRef && !this.dropdownRef.contains(event.target) && !this.toggleButtonRef.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    return (
        <div className='z-10 shadow-inner shadow-slate-500 mb-10 bg-gradient-to-tr from-slate-900 to-slate-700 drop-shadow-xl items-center absolute flex justify-between top-5 w-full font-FrontageRegular tracking-[-0.4rem] text-2xl'>
          
          <div className='relative w-[20.5%]'>
            <div className='shadow-inner rounded-sm shadow-slate-700 bg-gradient-to-r from-slate-950 to-slate-900 pl-12 pt-2 pb-2 text-left'>
              <p className='text-4xl font-BettyNoir tracking-wide text-slate-100'>Bleakmoor</p>
              <p className='text-lg tracking-[-0.3rem] text-slate-400'>A Playground for whispers</p>
            </div>
            <div className='absolute w-full'>
              <Navbar/>
            </div>
          </div>

          <div ref={(ref) => { this.dropdownRef = ref; }} className={`absolute rounded-b-xl text-slate-50 right-7 top-[4.4rem] bg-slate-900 text-left w-[10%] transition-transform duration-300 ease-out transform ${this.state.isOpen? 'scale-y-100' : 'scale-y-0'} origin-top overflow-hidden`}>
            <div className='my-5'>
              <div className='my-2 w-full h-[1.5px] bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800'/>

              <NavButton text='Login'/>
              <NavButton text='Sign Up'/>

              <div className='my-2 w-full h-[1.5px] bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800'/>
            </div>
          </div>

          {/* Banner */}
          <div ref = {(ref) => {this.toggleButtonRef = ref;}} className='flex justify-center items-center space-x-10 pl-16 pr-10 rounded-l-3xl shadow-md shadow-slate-900 text-slate-50 bg-gradient-to-tr from-slate-900 to-slate-800 h-14'>
            <HeaderButton text={"Home"} link={"/"} />
            <HeaderButton text={"About Me"} link={"/about"} />
            <HeaderButton text={"Join The Investigation"} link={"/join"} />

            <div className='mx-40 mb-5 w-20 h-20 group border-2 border-slate-400 rounded-full bg-slate-500'>
              <button onClick={this.toggleUnfold}>
                <img 
                  src='/media/detective-silhouette-vector-5841139.png' 
                  alt="login detective icon" 
                  className='h-full w-full transition duration-300 ease-out hover:scale-95 shadow-xl shadow-slate-900 active:scale-[80%] rounded-full'
                />
              </button>
            </div>
          </div>
          {/* Banner */}
        </div>
    );
  }
}