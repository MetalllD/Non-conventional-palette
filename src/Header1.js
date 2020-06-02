import React,{Component} from 'react';
import './App.css';
import Userinput from './Userinput';
import sr from './ScrollReveal'

class Header1 extends React.Component {

    componentDidMount = () => {
       const config = {
         origin: 'left',
         duration: 1000,
         delay: 150,
         distance: '500px',
         scale: 1,
         easing: 'ease',
       }
   
       sr.reveal(this.refs.box1, config)
     }

     render(){
      return( 
           <div className="header1"  ref='box1'>
               NON-CONVENTIONAL
           </div>
       )
      }
   
}

export default Header1;