import React from 'react';


const App = () => {
  let curDate = new Date(2021, 6, 9, 22).getHours();
  let greeting = "";
  //inline styling
  const cssStyle = {};


  if(curDate >=1 && curDate <12){
    greeting = "good morning";
    cssStyle.color ="Blue";
  } else if(curDate >= 12 && curDate < 19){
    greeting = "good afternoon";
    cssStyle.color ="orange";
  }else {
    greeting = "good night";
    cssStyle.color ="grey";
  }

  return(
    <>
    <div>
    <h1>Hello sir, <span style={cssStyle}>{ greeting }</span> </h1>
    </div>
    </>
  )

}

export default App;
