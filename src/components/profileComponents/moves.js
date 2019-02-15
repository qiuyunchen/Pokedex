import React from 'react';
import './moves.css'

const Moves = (props) => {
    const {data} = props;
    if (!data) return null;

    console.log(data)
    let arr = []
    for (let i = 0; i < 3; i ++) {
        arr.push(data.moves[i]);
    }
    // console.log(arr)
    
    return (
        <div className='move-wrap'>
            <h1 className='move-title'>Moves</h1>
            <div className='move-rows'>
                {
                    arr.map((e, i) => {
                        // if (i = 3) return;
                        return(
                            <span className='each-move' key={i}>{e.move.name} </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Moves;