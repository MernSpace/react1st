import React from 'react';

const SortFi = () => {
    let mark = 100;
    return (
        <div>
            <h1>this is sort if else</h1>
             {(()=>{
            if(mark>=80 && mark<100){
                return <h1>A+</h1>
            }
            else if (mark>=60 && mark<80){
                return <h1>A</h1>
            }
            else if (mark>=40 && mark<60){
                return <h1>A-</h1>
            }
            else if (mark>=33 && mark<40){
                return <h1>C</h1>
            }
            else{
                return <h1>F</h1>
            }
        })()}
        </div>
        
    );
};




export default SortFi;