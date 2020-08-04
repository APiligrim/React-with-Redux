import React, { useState } from 'react';

const Accordion =({items})=> {
    const [activeIndex, setActiveIndex] =useState(null);
    
    const onTitleClick =(index)=>{
        setActiveIndex(index);
    };

    //1.receive that list of itmes
    const renderedItems = items.map((item,index) =>{
        const active =index === activeIndex? 'active':'';

        //key is a special string attribute you need to include when creating lists of elements in React.
        //they help to identify which items in the list are changed, updated , deleted
        return (
            <React.Fragment key={item.title}>
                <div 
                    className={`title${active}`}
                    onClick={()=>onTitleClick(index)}
                >
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                <div className={`content${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return(
        <div className='ui styled accordion'>
            {renderedItems}
            <h1>{activeIndex}</h1>
        </div>
    ) 
};


export default Accordion;