import { useReducer } from "react";
import CartContext from "./cart-contex";

const defaultState ={
    med:[],
    item:[],
    totalAmount:0,
}

const cartReducer =(state , action)=>{
    if(action.type=='ADDMED'){
      const existingCartItem = state.item
      const existingAmount = state.totalAmount
      const updateCartItem =  state.med.concat(action.med)
      return{
        med : updateCartItem ,
        item: existingCartItem,
        totalAmount : existingAmount
      }
    }
    else if(action.type=='ADD'){
      const updateCartItem =  state.item.concat(action.item)
      const updateTotalAmount = state.totalAmount + (action.item.price * action.item.amount)
      const existingMed = state.med
      return {
        med: existingMed ,
        item : updateCartItem,
        totalAmount : updateTotalAmount
      }
    }else if(action.type=="EDIT"){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.item.findIndex((item) => item.id === action.item.id)
        const existingCartItem = state.item[existingCartItemIndex];
        const updatedItem = {...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,};
        let  updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
      const existingMed = state.med
      return {
        med: existingMed ,
        item: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    else if(action.type=='REMOVE'){
        const existingCartItemIndex = state.item.findIndex(
            (item) => item.id === action.id
          );
          const existingItem = state.item[existingCartItemIndex];
          const updatedTotalAmount = state.totalAmount - existingItem.price;
          const existingMed = state.med
          let updatedItems;
          if (existingItem.amount === 1) {
            updatedItems = state.item.filter(item => item.id !== action.id);
          } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.item];
            updatedItems[existingCartItemIndex] = updatedItem;
          }
      
          return {
            med: existingMed ,
            item: updatedItems,
            totalAmount: updatedTotalAmount
          };
    }else{

        return defaultState
    }

}

const CartProvider =(props)=>{
    const [state , dispatch] = useReducer(cartReducer , defaultState)
    const cartContex ={
      med:state.med,
        item:state.item,
        totalAmount : state.totalAmount,
        addMed:((med)=>{
          dispatch({type:"ADDMED",med:med})
        }),
        addItem:((item)=>{
            dispatch({type:'ADD',item : item})
        }),
        removeItem:((id)=>{
            dispatch({type:'REMOVE' , id: id})
        }),
        editItem:((item)=>{
            dispatch({type:'EDIT',item:item})
        })

    }
return <CartContext.Provider value={cartContex}>
    {props.children}
</CartContext.Provider>
}
export default CartProvider;