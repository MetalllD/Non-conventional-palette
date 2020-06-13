import React,{Component} from 'react';
import './App.css';
import sr from './ScrollReveal';
import { SketchPicker } from 'react-color'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const StyledDiv = styled.div`
    padding:50px;
`;

const Head = styled.div`
    font-size:40px;
    padding:40px;
    color:#fff;
`;

const Result = styled.div`
   
    padding:100px;
    font-size:50px;
    margin:50px;
`;

class Create extends Component {

    componentDidMount = () => {
        const config = {
          origin: 'left',
          duration: 2000,
          delay: 300,
          distance: '300px',
          scale: 1,
          easing: 'ease',
        }
    
        sr.reveal(this.refs.box1, config)
      }

      state = {
        background: '#fff',
        color:'#000'
      };
    
      handleChangeCompleteBack = (color) => {
        this.setState({ background: color.hex });
      };

      handleChangeCompleteFont = (color) => {
        this.setState({ color: color.hex });
      };


        render(){
        return(
            <StyledDiv ref="box1">

              <Container>
              <Row>

              <Col>
              <h1>Pick background color</h1>
              </Col>

              <Col>
                 <SketchPicker
                 color={ this.state.background }
                 onChangeComplete={ this.handleChangeCompleteBack }
                 /></Col>
                

                 <Col>
                   <SketchPicker
                 color={ this.state.color }
                 onChangeComplete={ this.handleChangeCompleteFont }
                 /></Col>

              <Col>
              <h1>Pick text color</h1>
              </Col>

              </Row>
              </Container>

                 <Result style={{backgroundColor:this.state.background,color:this.state.color}}>
                     Hello
                 </Result>

                
            </StyledDiv>
        )
        }
    
}

export default Create ;