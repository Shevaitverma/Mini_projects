import React, { useState } from 'react';


const App = ()=>{
    
    let time = new Date().toLocaleTimeString();
    const [curr_time, set_time] = useState(time);

    const UpdateTime =() =>{
        time = new Date().toLocaleTimeString();
        set_time(time);
    }
    setInterval(UpdateTime,1000);

    return(
        <>
            <h1>{curr_time}</h1>
        </>
    )
}

export default App;