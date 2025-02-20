import React, { Component }from 'react'
import Bars from './Bars';
import "./Graph.css"

class Graph extends Component{
    render(){
        return(
            <div className = 'GraphBox'>
                <Bars></Bars>
            </div>
        );
    }
}


export default Graph;