import React, { useState } from 'react';


const App = ()=>{

    let newTime = new Date().toLocaleTimeString();
    const [curr, setCtime] = useState(newTime);

    const updateTime = ()=>{
        const new_Time = new Date().toLocaleTimeString();
        setCtime(new_Time);
    };

    return(
        <>
        <h1> {curr} </h1>
        <button onClick={updateTime}> get time </button>
        </>
    )
}

export default App;