import React, { useEffect } from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../app/ProductsSlice';
import { addToCart } from '../app/CartSlice';

const Products = () => {
    const products=useSelector((state)=>state.products);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());
    },[]);
    
  return (
    <Container className='py-5'>
        <Row className='py-5'>
        {
            Array.isArray(products)?(
                products.map((product)=>(
            <Col key={product.key} className='mb-5 '>
                <Card style={{width: '18rem'}}>
                    <Card.Img style={{height:"300px"}} variant='top' src={product.image}/>
                    <Card.Body>
                        <Card.Title style={{height:"150px"}}>{product.title}</Card.Title>
                        
                        <p>
                            <strong>Price:{product.price}$</strong>
                        </p>
                        <Button className='w-100' variant="primary" onClick={()=>dispatch(addToCart(product))}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        ))
            ):null
            }
                    
            
            
        </Row>
    </Container>
  )
}

export default Products