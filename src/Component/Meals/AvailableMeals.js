import { useContext, useEffect, useState } from 'react';
import CartContext from '../../Store/cart-contex';
import Card from '../Cart/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem';


const AvailableMeals = () => {
//   const cartCTX = useContext(CartContext)
const [medData , setMedData] = useState([])
useEffect(()=>{

    fetch('https://crudcrud.com/api/1e4c151410134db19ce4c4175c36e094/med').then(res=>res.json()).then((res)=>setMedData(res))
},[])
console.log(medData)

    const mealsList = medData.map((item)=><li><MealItem key={item.id} name={item.name} price={item.price} description={item.description} id={item.id}/></li>)
return(
<section className={classes.meals}>
    <Card>
<ul>
    {mealsList}
</ul>
</Card>
</section>
)
}

export default AvailableMeals