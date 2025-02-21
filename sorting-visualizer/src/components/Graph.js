import React, {Component} from 'react'

class Graph extends Component{

    constructor (props){
        super (props)

        this.state = {
            message : "Welcome !"
        }
    }

    HI(){
        this.setState({
            message: "Hi"
        })
    }

    readInput(){
        let arrayString = document.getElementById('userInput').value; // Get input as string
        let newArray = arrayString.split(',').map(num => Number(num.trim())); // Convert to array of numbers

        console.log(newArray); // Log the entire array
        newArray.forEach(element => console.log(element));
    }

    render(){
        return(
            <div className='MainGraph'>
                <input id='userInput' placeholder='enter array'></input>
                <button onClick={() => this.readInput()}>submmit</button>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.HI()}>HI</button>
            </div>
            
        )
    }
}

export default Graph