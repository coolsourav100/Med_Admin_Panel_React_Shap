import React, { useContext, useState } from 'react'
import CartContext from '../../Store/cart-contex'

const UserForm = () => {
  const [ medData , setMedData] = useState({name:"" ,description:"",price:''})
  const cartCTX = useContext(CartContext)
  console.log(cartCTX)
  const changeHandler=(e)=>{
    e.preventDefault();
    setMedData({...medData,
       [e.target.name] : e.target.value

  })
}
const submitHandler=(e)=>{
  e.preventDefault();
  // cartCTX.addMed({id:Math.random(),...medData})
  // setMedData({
  //   name:"" ,description:"",price:''
  // })
  fetch('https://crudcrud.com/api/1e4c151410134db19ce4c4175c36e094',{
    method:'POST',
    body:JSON.stringify({id:Math.random(),...medData})
  }).then(res=>res.json()).then(res=>console.log(res,'ADd med'))
}
console.log(medData)
  return (
    <form className='form form-control d-flex' onSubmit={submitHandler}>
    <div className="col-auto ms-4">
      <label className="sr-only">Medicine Name</label>
      <input type="text" className="form-control mb-2 ms-4" name='name' value={medData.name} onChange={changeHandler}/>
    </div>
    <div className="col-auto ms-4">
      <label className="sr-only">Description</label>
      <div className="input-group mb-2 ms-2" >
        <input type="text" className="form-control" onChange={changeHandler} value={medData.description} name='description'/>
      </div>
    </div>
    <div className="col-auto ms-4">
      <label className="sr-only">Price</label>
      <div className="input-group mb-2 ms-2">
        <input type="number" className="form-control" name='price' onChange={changeHandler} value={medData.price}/>
      </div>
    </div>
    <div className="col-auto ms-4 mt-4">
      <button type="submit" className="btn btn-primary mb-2 ms-2">ADD</button>
    </div>
  
</form>
  )
}

export default UserForm