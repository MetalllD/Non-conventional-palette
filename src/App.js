import React,{Component} from 'react';
import Radium from 'radium';
import './App.css';
import Userinput from './Userinput';
import Useroutput from './Useroutput';
import Header1 from './Header1';
import Header2 from './Header2';
import Header from './Header';
import Asset1 from './Asset1';
import Asset2 from './Asset2';
import Asset3 from './Asset3';
import Create from './Create';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class App extends Component{

    state =  {

        persons : [
            { id:'1' , name: 'HELLO !' , class1: 'purple1', class2:"purple2" , back1:"#212122", back2:" #E49AD9"},
            { id:'2' , name: 'HELLO !' , class1: 'teal1' , class2:"teal2" , back1:"#93E9BE" , back2:"#3C6BE4"},
            { id:'3' , name: 'HELLO !' , class1: 'blue1' , class2:"blue2" , back1:"#006382" , back2:"#DBFF00"},
            { id:'4' , name: 'HELLO !' , class1: 'orange1' , class2:"orange2" , back1:"#212122" , back2:"#FB710E"},
            { id:'5' , name: 'HELLO !' , class1: 'blue3' , class2:"blue4" , back1:"#160B44" , back2:"#D19AE4"},
            { id:'6' , name: 'HELLO !' , class1: 'olive1' , class2:"olive2" , back1:"#4D6B5C" , back2:"#BDFF00"},
            { id:'7' , name: 'HELLO !' , class1: 'magenta1' , class2:"magenta2" , back1:"#280C22" , back2:"#D41900"}
        ]

    }

    changeName =  (event) => {

        let peoplex = [...this.state.persons];
        peoplex.forEach((people,index) => {
            return people.name = event.target.value ;
        })
        
        this.setState({persons :peoplex});
    };

    

    render() {

    return (
        <div className="App">
            <Header />
            <Header1 />
            <Header2 />
            <p class="discre"> A platform where you can find some non conventional trendy color combos to use for your next prject !</p>
            <Asset1 />
            <Userinput change={this.changeName} />
           
            <div class="infobox">
            {this.state.persons.map((person, index) => {
                return <Useroutput 
                name= {person.name} 
                key={person.id}
                class1={person.class1}
                class2={person.class2}
                back1={person.back1}
                back2={person.back2}
                    /> 
                 })}
                 </div>

                 <Asset2 />
   
            <Create />

            <Asset3 />

           

        </div>
    )
}
}







export default Radium(App);