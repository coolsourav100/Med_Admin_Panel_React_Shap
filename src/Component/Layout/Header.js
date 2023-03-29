import React from 'react'
import  classes from './Header.module.css'
import mealsImg from '../../Asset/med.jpg'
import HeaderCartButton from './HeaderCartButton'


const Header = (props) => {
  return (
    <>
    <header className={classes.header} >
    <h1>Admin Panel</h1>
   <HeaderCartButton onClick={props.onShow}/>
    </header>
    <div className={classes['main-image']}>

<img  src={mealsImg} alt='Meals Img'/>
    </div>

    </>
  )
}

export default Header