import React from 'react';


export default function Circle(props) {
    let classes = "btn" + props.data.id
  return (
 <> <div className="buttondiv">
     

<button onClick={() => {props.handleCount(props.data.id)}} className={classes}  > {props.data.count}  Click me </button>
 </div>
      
 </>
  );
}