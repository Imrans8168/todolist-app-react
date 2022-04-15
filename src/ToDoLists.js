import React from 'react';

const ToDoLists =(pros)=>{

  

    return (
        <>
            <div className='todo_style'>
                
                {/* <li class="fa fa times" area-hidden="true" /> */}
                <i className="fa-solid fa-trash" onClick={()=>{
                    pros.onSelect(pros.id) }}></i>
                <li >{pros.text}</li>
            </div>
        </>
    );
}

export default ToDoLists;

