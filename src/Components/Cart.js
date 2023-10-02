import React from 'react'
import { Button, Container, Image, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, deleteFromCart } from '../app/CartSlice';

const Cart = () => {
  const cart=useSelector((state)=>state.cart.cart);
  const dispatch=useDispatch();
  const totalPrice=cart.reduce((acc,product)=>{
    acc += product.price * product.quantity;
    return acc
  },0)
  return (
    <Container>
      <h1 className='py-5'>Welcome in Cart</h1>
      <h5>Total Price:{totalPrice.toFixed(2)}<strong>$</strong></h5>
      {cart.length > 0 ?(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th><Button size='sm' className='w-100' variant='primary' onClick={()=>dispatch(clearCart())} >Clear Cart</Button></th>
          </tr>
        </thead>
        <tbody>
        {
          Array.isArray(cart)?(
            cart.map((product)=>(
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td><Image src={product.image} style={{width:"100px",height:"100px"}} /></td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td><Button className='w-100 mt-4' variant='danger' onClick={()=>dispatch(deleteFromCart(product.id))} >Delete</Button></td>
              </tr>
          ))
          ):null
          
        }
          
          
        </tbody>
      </Table>
      ):null}
    
    </Container>
  )
}

export default Cart