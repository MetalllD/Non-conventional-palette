import React,{Component} from 'react';
import './App.css';
import sr from './ScrollReveal'

class Userinput extends Component {

    componentDidMount = () => {
        const config = {
          origin: 'top',
          duration: 1000,
          delay: 150,
          distance: '30px',
          scale: 1,
          easing: 'ease',
        }
    
        sr.reveal(this.refs.box1, config)
      }


        render(){
        return(
            <div className="input" ref="box1">
                Type text here  <br /> <br />
                <input type="text" id="box" onChange={this.props.change}></input>
            </div>
        )
        }
    
}

export default Userinput;