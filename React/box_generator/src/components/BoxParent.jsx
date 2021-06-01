
import React, {useState} from 'react';
import BoxForm from './BoxForm';
import BoxDisplay from './BoxDisplay';

const BoxParent = () => {
    const [boxes, setBoxes] = useState([{
        width: '',
        color: ''
    }]
    );

    return(
        <div>
            <BoxForm boxes={boxes} setBoxes = {setBoxes} />
            <BoxDisplay boxes = {boxes}/>
        </div>
        )
            
            
    };

export default BoxParent;
