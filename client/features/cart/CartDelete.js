import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../app/slices/cartSlice'




const CartDelete=(props)=> {
    const obj = props.props
    const dispatch = useDispatch()
    const handleDelete = ()=>{
        dispatch(cartActions.deleteCartProduct(obj))
    }

    console.log(props, 'this is props in delete')
  return (
    <button onClick={handleDelete}>X</button>
  )
}

export default CartDelete