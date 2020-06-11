import React,{Component} from 'react';
import './App.css';
import sr from './ScrollReveal';
import styled from 'styled-components';

const StyledDiv = styled.div`
list-style:none;
float:right;
margin-right:30px;
margin-bottom:10px;
font-size:20px;
transition: all 0.5s ease;

&:hover{
    color:#E49AD9;
    cursor: pointer;
}`;

class Header extends Component {

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
            <div>
                  <StyledDiv>About</StyledDiv>
                  <StyledDiv>Create palette</StyledDiv>
                  <StyledDiv className="ok">Explore colors</StyledDiv>
   
            </div>
        )
        }
    
}

export default Header;