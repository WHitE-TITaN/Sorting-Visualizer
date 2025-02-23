import React, { Component } from 'react'
import BubbleSort from './BubbleSort';

class Graph extends Component {

    constructor(prop) {
        super(prop)
        this.state = {
            bar: [90, 10, 50, 70, 80, 77, 30, 45],
            currentSortingBars : [],
            algorithm: "BubbleSort"
        };
    }

    algorithmSelection(){
        const algo = document.getElementById('algorithm').value;

        if(algo === "BubbleSort"){
            this.setState({algorithm : BubbleSort},
                () => {BubbleSort([...this.state.bar], this.updateGraph.bind(this))})
        }

        if(algo === "QuickSort"){
            console.log("QuickSort");
        }

        if(algo === "MergeSort"){
            console.log("MergeSort");
        }

        if(algo === "HeapSort"){
            console.log("HeapSort");
        }
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
                <br />
                <div>
                    <label htmlFor ="algorithm" className='SelectAlgortim'>
                        ALGORITHM
                    </label>
                    <select id = "algorithm">
                        <option value="BubbleSort">BubbleSort</option>
                        <option value="QuickSort">QuickSort</option>
                        <option value="MergeSort">MergeSort</option>
                        <option value="HeapSort">HeapSort</option>
                    </select>
                </div>
                <br />
                <div>
                    <button onClick={() => this.readInput()}>submmit</button>
                 
                    <button onClick={() => this.resetGraph()}>Reset</button>

                    <button onClick={() => this.algorithmSelection()
                        /**/}>Sort</button>
                </div>
                


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