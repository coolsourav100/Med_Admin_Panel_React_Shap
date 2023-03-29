import React, {  useState } from 'react';
import CartContext from '../../Store/cart-contex';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css'


const MealItemForm = (props) => {
  const [inputItem , setInputItem] = useState(1)
  const onInputNumber =(data)=>{
    
 setInputItem(data)
  }
  const clickHandler=(e)=>{
    e.preventDefault()
    props.addToCart(inputItem)
  }
  
  return (
    <form className={classes.form}>
        <Input label="Amount " input={{id:'amount '+props.id,type:'number' , min:'1',max:'5',step:'1',defaultValue:'1'}} onInput={onInputNumber}/>
<button className={classes.button} onClick={clickHandler}>+ADD</button>
    </form>
  )
}

export default MealItemForm