import React from 'react';
import Product from '../Product/Product';

const Card = (props) => {
    const card = props.card;
    // const total = card.reduce((total, prd) => total + prd.price,0);
    let total = 0;
    for(let i = 0; i< card.length; i++){
        const product = card[i];
        total = total + product.price;
    }
    let shipping = 0;
    if (total > 200){
        shipping = 0;
    }
    else if (total > 190){
        shipping = 4.99;
    }
    else if(total> 0){
        shipping = 12.99;
    }
    const tax = (total / 10);
    const totalgrandPrice = (total + shipping + Number(tax)).toFixed(2);
    
    const formateNumner = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (

        <div>
            <h4>order summary</h4>
            <p>Items orderd: {card.length}</p>
            <p>Price Product : {formateNumner(total)}</p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p><small>Tax + vat: {formateNumner(tax)}</small></p>
            <p>total price: {totalgrandPrice}</p>
        </div>
    );
};

export default Card;