import React from 'react';
import './type.css'
 //   Needs conditional, if the type received is based on a specfic color, 
 //   pass that color in to be used in the tab displayed
 //   The tabs received are based on the pokemon data provided..
 //   This data comes from from the API call hit to launch the pokemon from the home page
 //   props.types.type
 //   use the slots to specifiy which tab gets which type and color
const Type = (props) => {
    const data = props.data;
    let type1 = null;
    let type2 = null;

    if (!data) return null;
    // console.log(data);

    if (data.types.length === 1) {
        type1 = data.types[0].type.name;
    }
    else {
        type1 = data.types[0].type.name;
        type2 = data.types[1].type.name;
    }
    
 return (
    <>
    {
        !type2 ? 
        <div className='type_box'>
            <span className={type1}>{type1}</span> 
        </div>
        :
        <div className='type_box'>
            <div id='m' className={type1}> {type1} </div>
            <div id='n' className={type2}>{type2}</div>
        </div>
    }  
</>
 )
}

export default Type;