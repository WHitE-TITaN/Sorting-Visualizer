import React, { Component } from 'react'
import BubbleSort from './BubbleSort';

class Graph extends Component {

    constructor(prop) {
        super(prop)
        this.state = {
            bar: [90, 10, 50, 70, 80, 77, 30, 45]
        };
    }

    readInput() {
        let arrayString = document.getElementById('userInput').value;
        let newBar = arrayString.split(',').map(num => Number(num.trim()));

        this.setState({ bar: newBar }, () => {console.log(newBar)});
        
    }


    updateGraph = (updatedState) =>{
        this.setState({bar: updatedState});
    }
    
    resetGraph(){
        const defaultState = [100, 100, 100, 100, 100, 100, 100];
        this.setState({bar: defaultState});
    }

    render() {
        return (
            <div className='mainInput'>
                <input id='userInput' placeholder='enter array'></input>
                <button onClick={() => this.readInput()}>submmit</button>
                <hr/>
                <button onClick={() => this.resetGraph()}>Reset</button>
                <button onClick={() => BubbleSort([...this.state.bar], this.updateGraph.bind(this))}>Sort</button>


                <div className='MainGraph'>
                    {
                        this.state.bar.map((Hight, index) => (<div

                            key={index}
                            style={{
                                height: `${Hight}px`,
                                width: `40px`,

                                borderRadius: `5px`,
                                backgroundColor: 'greenyellow'
                            }}>

                        </div>))
                    }
                </div>
            </div>
        )
    }

}



export default Graph