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

    render(){
        return(
            <div className='MainGraph'>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.HI()}>HI</button>
            </div>
            
        )
    }
}

export default Graph