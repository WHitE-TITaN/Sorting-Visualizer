import React, { Component } from 'react'
import BubbleSort from './BubbleSort';

class Graph extends Component {

    constructor(prop) {
        super(prop)
        this.state = {
            bar: [90, 10, 50, 70, 80, 77, 30, 45],
            currentSortingBars : [],
            isSorted: false
        };
    }


    readInput() {
        let arrayString = document.getElementById('userInput').value;
        let newBar = arrayString.split(',').map(num => Number(num.trim()));

        this.setState({ bar: newBar }, () => {console.log(newBar)});
        
    }


    updateGraph = (updatedState, selectedBars) =>{
        this.setState({
            bar: updatedState,

            currentSortingBars : selectedBars
        });

    }
    
    resetGraph(){
        const defaultState = [100, 100, 100, 100, 100, 100, 100];
        this.setState({bar: defaultState,
            currentSortingBars: []
        });
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
                        this.state.bar.map((Hight, index) => {
                            const selectionHiglight = this.state.currentSortingBars.includes(index);

                            return(
                                <div
                                    key={index}
                                    style={{

                                        height: `${Hight}px`,
                                        width: `40px`,

                                        borderRadius: `5px`,
                                        backgroundColor: selectionHiglight ? 'red' : 'greenyellow',
                                        transition: 'background-color 0.3s ease'
                                    }}>

                                </div>
                            );
                        }
                    )
                    }
                </div>
            </div>
        )
    }

}



export default Graph