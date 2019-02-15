import React from 'react';

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
        <>
        <div>MOVES</div>
        {
            arr.map((e, i) => {
                // if (i = 3) return;
                return(
                    <span key={i}>{e.move.name} </span>
                )
            })
        }
        </>
    )
}

export default Moves;