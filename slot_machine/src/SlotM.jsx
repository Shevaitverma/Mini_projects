import React from 'react';


const SlotM = (props)=>{
    
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;
    //     OR
    
    let {x,y,z} = props;

    if ( (x===y) && (y===z) ){
        return(
            <>
            <div className='slot_inner'>
                <h1>
                    {x}  {y}  {z}
                </h1>
                
                <h1 style={{padding: '10px 20px' , backgroundColor: "#C3F6CE"}}> 
                    This is Matching 
                </h1>
                <hr />
            </div>
            </>
        )
        } else{
            return(
                <>
                <div className='slot_inner'>
                    <h1>
                        {x}  {y}  {z}
                    </h1>
        
                    <h1 style={{padding: '10px 20px' , backgroundColor: "#FF9898"}}> 
                        This is not Matching 
                    </h1>
                    <hr />
                </div>
                </>
            )
        }
}

export default SlotM;