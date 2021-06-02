import React, { useState } from 'react';

const Tabs = props =>{
    const {items} = props;
    const [selectedIdx, setSelectedIdx]  = useState(0);

    const contStyle = {
        border: 'solid 1px black',
        marginTop: 10,
        marginRight: 300,
        marginLeft: 300,
        padding: 100,
    }
    const renderTabs = (tab, idx) =>{
        const tabStyle = {
            display: 'inline-block',
            marginRight: 5, 
            marginTop: 20, 
            padding: 20, 
            width: 100, 
            border: 'solid 1px black'
        };
        if(selectedIdx === idx)
        {
            tabStyle.backgroundColor = "black";
            tabStyle.color = "white";
        }
        return(
                <span key = {idx} onClick = {(e) => {setSelectedIdx(idx)}} style= {tabStyle}>
                    {tab.lable}
                </span>
        )
    }
    return (
        <div>
            {items.map(renderTabs)}
            <div style = {contStyle}>
                {items[selectedIdx].content}
            </div>
        </div>
    ) 

}
export default Tabs;