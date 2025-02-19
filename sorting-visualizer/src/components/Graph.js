import React, { Component }from 'react'
import Bars from './Bars';
import "./Graph.css"

class Graph extends Component{
    render(){
        return(
            <div className = 'GraphBox'>
                <Bars></Bars>
                <br></br>
            </div>
        );
    }
}


export default Graph;