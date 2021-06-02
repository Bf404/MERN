import React, {useState} from 'react';
import AddItem from './AddItem';
import TaskList from './TaskList';



const TaskParent = () => {
    const [listItems, setListItems] = useState([])
        return (
            <div>
                <AddItem listItems = {listItems} setListItems = {setListItems}/>
                <TaskList listItems = {listItems} setListItems = {setListItems}/>
                
            </div>
        );
            
    }


export default TaskParent;