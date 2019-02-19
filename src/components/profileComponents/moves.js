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

const moveObjToModalHTML = () =>{
    return `
        <h1 class='modal-title'> ${moveObj.name}</h1>
        <p>Type: ${moveObj.type} </p>
        <p>Power: ${moveObj.power? moveObj.power : 0} </p>
        <p>PP: ${moveObj.pp} </p>
    `
}

const getMoveInfo = (e) =>{
    moveObj.name = e.target.innerText;

    Axios.get(`https://pokeapi.co/api/v2/move/${e.target.innerText}/`)
        .then((data)=> {
            moveObj.type = data.data.type.name;
            moveObj.pp = data.data.pp;
            moveObj.power = data.data.power;
        })
        .then(()=>{
            // transform updated move values into html and then insert into modal box
            console.log('move object... ', moveObj)
            document.querySelector('.modal-inner-content').innerHTML = moveObjToModalHTML();
        })
        .then(()=>{
            openModal();
        })
        .catch(e => console.log('Error:', e.toString()));
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
                            <span onClick={e => getMoveInfo(e)} className='each-move' key={i}>{e.move.name} </span>

                                <div className='modal modal-style'>
                                    <div className="modal-content">
                                        <div className='close-box'>
                                            <span className="close" onClick={e => closeModal(e) }> &times;</span>
                                        </div>
                                        <div className='modal-inner-content'>
                                            content inserted here via getMoveInfo()
                                        </div>
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
