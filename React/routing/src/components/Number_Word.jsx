import React from 'react';
const Number = props =>{

    return (
        <div>
            {isNaN(props.isnum)? 
            <p>The word is: {props.isnum}</p>:
            <p>The Number is: {props.isnum}</p>    
        }
        </div>
    )

}


export default Number;