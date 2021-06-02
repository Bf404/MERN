import React from 'react';

const TaskList = (props) => {
    const {listItems, setListItems} = props;
    
    const renderItems = (item, idx) =>{
        const textStyle = {};
        item.isCompleted ? textStyle.textDecoration = "line-through": textStyle.textDecoration = 'none'
        return(
            <div key = {idx}>
                {
                    <p> <input type="checkbox" checked={item.isCompleted} onChange={checkHandler} name={idx}/> <span style = {textStyle}>
                        {item.itemText}</span> <span style ={{marginRight: 10}}></span>                   
                    <button style = {{backgroundColor: 'red'}} onClick={deleteHandler} name={idx}>Delete</button> </p>
                }
                
            </div> 
        )
        
    };
    const checkHandler = e =>{
        let thisItem = listItems[e.target.name];
        if(thisItem.isCompleted){
            thisItem.isCompleted = false;
        }
        else{
            thisItem.isCompleted = true;
        }

        let updatedList = [...listItems];
        updatedList[e.target.value] = thisItem;
        setListItems(updatedList);
    }
    const deleteHandler = e =>{
        setListItems(listItems.filter((task, idx) => {
            return idx != e.target.name;
        }))
    }
    return(
        <div>
            {listItems.map(renderItems)}
            
        </div>
    )
}

export default TaskList;