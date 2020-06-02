import React,{Component} from 'react';
import './App.css';
import Userinput from './Userinput';
import sr from './ScrollReveal'

class Useroutput extends React.Component {

     componentDidMount = () => {
        const config = {
          origin: 'bottom',
          duration: 1500,
          delay: 150,
          distance: '30px',
          scale: 1,
          easing: 'ease',
        }
    
        sr.reveal(this.refs.box1, config)
      }

      render(){
       return( 
            <div className="output"  ref='box1'>
                <div className={this.props.class1}>
                {this.props.name}
                <div className="white">{this.props.back1}</div>
                </div> 
               
                <div className={this.props.class2}>
                {this.props.name}
                <div className="white">{this.props.back2}</div>
                </div> 
                
            </div>
        )
       }
    
}

export default Useroutput;