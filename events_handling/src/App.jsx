import React, { useState } from 'react';

const App = ()=>{
    
    const purple = "#8e44ad";
    const [bg, setBg]=useState(purple);
    const[name, setName] = useState('click me');

    const bg_change= ()=>{
        let new_bg = 'rgb(170, 197, 70)';
        setBg(new_bg);
        setName('yessss!')
    }
    const bg_back=() =>{
        setBg(purple);
        setName('lo aagya bapis')
    }

    return(
        <>
        <div style = { { backgroundColor : bg } }>
        <button onClick={bg_change} onDoubleClick={bg_back}>{name}</button>
        </div>        
        </>
    )
}

export default App;