import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './stats.css';

const Stats = (props) => {
    const name = props.name;
    const data = props.data;
    const arr = [5, 4, 2, 3, 1, 0]

    if (!data) return null;
    console.log(name, data.stats)

    return (
        <>
            <div>
                BASE STATS
            </div>
            <div className='stat-row'>
                {
                    arr.map((e, i) => {
                        return (
                            <div key={i}>
                                <div className='stat'>{data.stats[arr[i]].stat.name}</div>
                                <div className='stat-val'>{data.stats[arr[i]].base_stat}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Stats;