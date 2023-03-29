import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'

const Backdrop =(props)=>{
return (
  <div className={classes.backdrop} onClick={props.onClose}>

  </div>
)
}

const Modaloverlay =(props)=>{

  return(
    <div className={classes.modal}>
      <div className={classes.content}>
    {props.children}
      </div>

    </div>
  )

}

const Modal = (props) => {
  const portalelement = document.getElementById('overlay')
  return (
    <>
{ReactDOM.createPortal(<Backdrop onClose={props.onHide}/>,portalelement)}
{ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,portalelement)}
    </>
  )
}

export default Modal