import React from 'react';

const Childtoparent = () => {
    const callback=(arr)=>{
console.log('got the arr',arr)
    }
    return (
        <div>
            <Child cllbck={callback}/>
        </div>
    );
}

export default Childtoparent;


export const Child=({cllbck})=>{
    console.log('calbacl function in child',cllbck)
    const arr=['shivani','raveena']
    return (
        <>
 <button onClick={()=>cllbck(arr)}>CLICK</button> 
        </>
    )
}