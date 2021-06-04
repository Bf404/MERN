import React from 'react';

const Colored = props =>{

    return (
        <div>
            <p style={{color: props.color, backgroundColor: props.bgcolor}}>
                {props.word}</p>
        </div>
    )

}


export default Colored;