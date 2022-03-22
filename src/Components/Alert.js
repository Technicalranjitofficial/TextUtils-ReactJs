import React from 'react'



function Alert(props) {
    const capatilize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
  return (
      
    props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capatilize(props.alert.type)}</strong>! : <strong>{props.alert.msg}</strong>
  </div>
  
  )
}

export default Alert
