import React,{Component} from 'react';
import './App.css';
import Userinput from './Userinput';
import sr from './ScrollReveal'

class Header2 extends React.Component {

    componentDidMount = () => {
       const config = {
         origin: 'right',
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
           <div className="header2"  ref='box1'>
               <span className="one">P</span>
                <span className="two">A</span>
                <span className="third">L</span>
                <span className="four">E</span>
                <span className="five">T</span>
                <span className="six">T</span>
                <span className="seven">E</span>
           </div>
       )
      }
   
}

export default Header2;