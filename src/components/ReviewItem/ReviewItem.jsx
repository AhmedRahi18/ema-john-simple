import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveFromCart}) => {
    // console.log(product)
    const {id,img,price,name,quantity,shipping} = product
    return (
        <div className='review-item'>
            <img src={img}/>
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='money'> ${price} </span></p>
                <p>Shipping Charge: <span className='money'>${shipping}</span></p>
                <p>Order Quantity: <span className='money'>{quantity}</span> </p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}/>    
            </button>
        </div>
    );
};

export default ReviewItem;