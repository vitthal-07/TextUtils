import React from 'react'

export const Alert = (props) => {

  const capitalize =(msg)=>{
    msg = msg.toLowerCase();
    return msg.charAt(0).toUpperCase() + msg.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mx-3" role="alert`}>
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

