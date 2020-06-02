import React,{Component} from 'react';
import Radium from 'radium';
import './App.css';
import Userinput from './Userinput';
import Useroutput from './Useroutput';
import Header1 from './Header1';
import Header2 from './Header2';
import Header from './Header';

class App extends Component{

    state =  {

        persons : [
            { id:'1' , name: 'HELLO WORLD !!' , class1: 'purple1', class2:"purple2" , back1:"#212122", back2:" #E49AD9"},
            { id:'2' , name: 'HELLO WORLD !!' , class1: 'teal1' , class2:"teal2" , back1:"#93E9BE" , back2:"#3C6BE4"},
            { id:'3' , name: 'HELLO WORLD !!' , class1: 'blue1' , class2:"blue2" , back1:"#006382" , back2:"#DBFF00"},
            { id:'4' , name: 'HELLO WORLD !!' , class1: 'orange1' , class2:"orange2" , back1:"#212122" , back2:"#FB710E"},
            { id:'5' , name: 'HELLO WORLD !!' , class1: 'blue3' , class2:"blue4" , back1:"#160B44" , back2:"#D19AE4"},
            { id:'6' , name: 'HELLO WORLD !!' , class1: 'olive1' , class2:"olive2" , back1:"#4D6B5C" , back2:"#BDFF00"}
           
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
            <p class="discre"> Color contrast is a free collection of some cool and trend color contrast ideas that you can use as
in any part of your website or in any kind of graphic design work.</p>
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
   
        </div>
    )
}
}







export default Radium(App);