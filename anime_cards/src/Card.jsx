import React from  "react";

// here we can create a component and props for card....
const Card=(props)=>{
    return(
      <>
       <div className="cards">
         <div className="card">
           <img src={props.img_scr} alt="my pic" className='card_img'/>
           <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.C_name}</h3>
            <a href={props.links} target="_blank" rel="noreferrer">
              <button>Click here</button>
            </a>
           </div>
         </div>
       </div>
    </>
    ) 
  }

  export default Card;