import { useContext } from 'react';
import CartContext from '../../Store/cart-contex';
import Card from '../Cart/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem';


const AvailableMeals = () => {
  const cartCTX = useContext(CartContext)

    const mealsList = cartCTX.med.map((item)=><li><MealItem key={item.id} name={item.name} price={item.price} description={item.description} id={item.id}/></li>)
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