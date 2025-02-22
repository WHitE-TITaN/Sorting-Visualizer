import React from 'react'


function readInput(){
    let arrayString = document.getElementById('userInput').value;
    let newArray = arrayString.split(',').map(num => Number(num.trim()));
    
    console.log(newArray);
    newArray.forEach(element => console.log(element));
}

function Graph() {
    const bar = [90, 10, 50, 70, 80, 77, 30, 45];

    return (
        <div className='mainInput'>
            <input id='userInput' placeholder='enter array'></input>
            <button onClick={() => readInput()}>submmit</button>

            <div className='MainGraph'>
                {
                    bar.map((Hight, index) => (<div

                        key={index}
                        style={{
                            height: `${Hight}px`,
                            width: `40px`,
                            
                            borderRadius: `5px`,
                            backgroundColor: `greenyellow`
                        }}>

                    </div>))
                }
            </div>
        </div>
    )
}



export default Graph