import React from 'react';
import SlotM from './SlotM';

const App=()=>{
    return(
        <>
        <h1 className='Heading_style'> 
            Welcome to my <span style={ { fontWeight: "bold"} } >Slot machine</span>
        </h1>

        <div className='Heading_style'>
        <SlotM x='A' y='A' z='A'/>
        <hr />
        <SlotM x='A' y='B' z='A'/>
        <hr />
        <SlotM x='X' y='O' z='X'/>
        <hr />
        <SlotM x='X' y='X' z='X'/>
        </div>

        
        </>
    )
};

export default App;