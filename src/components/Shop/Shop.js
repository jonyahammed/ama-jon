import React, { useState } from 'react';
import fake from '../../fake/products.json';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fake.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handelOnClick = (product) =>{
        console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(fakeProduct => {
                        return (
                            <div>
                                <Product product = {fakeProduct} handelOnClick={handelOnClick}></Product>
                               
                            </div>
                                
                            
                        )
                    })
                }
    
            </div>
            <div className='card-container'>
               <Card card={cart}></Card>
            </div>
        </div>
    ); 
};

export default Shop;