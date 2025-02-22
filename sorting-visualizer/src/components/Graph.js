import React from 'react'


function readInput(bar){
    let arrayString = document.getElementById('userInput').value;
    bar = arrayString.split(',').map(num => Number(num.trim()));
    
    console.log(bar);
}

function Graph() {
    const bar = [90, 10, 50, 70, 80, 77, 30, 45];

    return (
        <div className='mainInput'>
            <input id='userInput' placeholder='enter array'></input>
            <button onClick={() => readInput(bar)}>submmit</button>

            <div className='MainGraph'>
                {
                    bar.map((Hight, index) => (<div

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



export default Graph