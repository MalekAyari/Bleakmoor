import React, { Component } from 'react';
import NavButton from '../features/NavButton';
import ArrowDownward from '@mui/icons-material/ArrowDownward';

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleNavbar = () => {
    this.setState((prevState) => ({isOpen: !prevState.isOpen}));
  };

  handleOutsideClick = (event) => {
    if (this.dropdownRef && !this.dropdownRef.contains(event.target) && !this.toggleButtonRef.contains(event.target)){
      this.setState({isOpen: false})
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  render() {
    return (
      <div className='relative flex flex-col items-center'>
        <button
          ref = {(ref) => {this.toggleButtonRef = ref}}
          onClick={this.toggleNavbar}
          className={`bg-slate-600 active:bg-slate-700 active:scale-90 text-white px-4 rounded-b-lg w-[80%] transform duration-200 ${this.state.isOpen ? 'scale-95' : 'scale-100'}`}        >
          <div className={`transition-transform duration-300 ${this.state.isOpen ? '-rotate-180' : 'rotate-0'}`}>
            <ArrowDownward/>
          </div>
        </button>

        <div
          ref={(ref) => {this.dropdownRef = ref} }
          className={`text-left w-[70%] transition-transform duration-300 ease-out transform ${this.state.isOpen ? 'scale-y-100' : 'scale-y-0'} origin-top overflow-hidden`}
        >
          <div className='py-4 w-full text-slate-50 font-FrontageRegular rounded-b-3xl tracking-[-0.2rem] text-xl bg-slate-900 drop-shadow-lg'>
            <div className='my-2 w-full h-[1.5px] bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800'/>
            
            <NavButton text={"Click Me"} link={"/"}/>
            <NavButton text={"No me"} link={"/"}/>
            <NavButton text={"I'm here too"} link={"/"}/>

            <div className='my-2 w-full h-[1.5px] bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800'/>
            
            <NavButton text={"Another Section"} link={"/"}/>
            <NavButton text={"Section Option"} link={"/"}/>
            
            <div className='my-2 w-full h-[1.5px] bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800'/>
            
            <NavButton text={"Final Section"} link={"/"}/>
            <NavButton text={"Another Option"} link={"/"}/>
            <NavButton text={"Final Option"} link={"/"}/>
            
            <div className='my-2 w-full h-[1.5px] bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800'/>
          </div>
        </div>
      </div>
    );
  }
}