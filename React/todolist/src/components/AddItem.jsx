import React, {useState} from 'react';

const AddItem = (props) => {
    const {listItems, setListItems} = props;
    const [item, setItem] = useState('');

    const handelSubmit = (e) =>{
        e.preventDefault();

        const newItem = {itemText: item, isCompleted: false};
        setListItems([...listItems, newItem]);
        setItem("")
    }


    return(
        <form onSubmit={handelSubmit}>
            <input type="text" value = {item} onChange={e => setItem(e.target.value)}/>
            <button> Add Task</button>

        </form>
    )
}

export default AddItem;