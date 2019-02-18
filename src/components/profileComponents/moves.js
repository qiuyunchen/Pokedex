import React from 'react';
import './moves.css'
import Axios from 'axios';

const moveObj = {};

const closeModal = () =>{
    document.querySelector('.modal').style.display = 'none';
}

const openModal = () =>{
    document.querySelector('.modal').style.display = 'block';
}

const getMoveInfo = (e) =>{
    const moveName = e.target.innerText;
    moveObj.name = moveName;
    const url = `https://pokeapi.co/api/v2/move/${moveName}/`;
    Axios.get(url)
        .then((data)=> {
            moveObj.type = data.data.type.name;
            moveObj.pp = data.data.pp;
            moveObj.power = data.data.power;
            openModal();
        })
        .catch(e => console.log('Error:', e.toString()));
}

const modalContent = () =>{
    return <>
        <h1>{moveObj.name}</h1>
        <p>Type: {moveObj.type}</p>
        <p>Power: {moveObj.power}</p>
        <p>PP: {moveObj.pp}</p>
        </>
}

const Moves = (props) => {
    const {data} = props;
    if (!data) return null;

    return (
        <div className='move-wrap'>
            <h1 className='move-title'>Moves</h1>
            <div className='move-rows'>
                {
                    data.moves.map((e, i) => {
                        return(
                            <>
                            <span onClick={e => getMoveInfo(e)} id={i} className='each-move' key={i}>{e.move.name} </span>

                                <div className='modal' id={'modal'+i}>
                                    <div className="modal-content">
                                        <div className="close" onClick={e => closeModal(e) }> &times;</div>
                                        {modalContent()}
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Moves;