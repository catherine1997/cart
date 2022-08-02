import React from 'react';
import './Cart.css';
import { useCart} from 'react-use-cart';

const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        item,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    if(isEmpty) return <h5 className='text-center py-5'>My Cart is Empty</h5>
  return (
    <div className='container-fluid py-3'>
        <div className='row justify-content-center'>
            <h4 className='text-center py-3 text-decoration-underline'> My Cart</h4>
            <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4'>
                <div className='d-flex justify-content-center py-3 '>
                <p className='position-relative fw-bolder text-title mx-1'>Cart <span className='position-absolute translate-middle rounded-pill badge bg-danger mx-5 '>({totalUniqueItems}) </span></p>
                <p className='fw-bolder text-title mx-1'>Total Items<span className='position-absolute translate-middle rounded-pill badge bg-success mx-5 '>({totalItems}) </span></p> 
            </div>
           
            <table className='table table-light table-hover m-0'>
                <tbody>
                    {items.map((item, index) => {
                        return(
                            <tr key={index} className='align-middle'>
                                <td><img src={item.img} className='img-cart' alt={item.title} /></td>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td>Quantity:{item.quantity}</td>

                                <td>
                                    <button onClick = {() => updateItemQuantity(item.id, item.quantity -1)}className='btn btn-outline-dark ms-1'>-</button>
                                    <button  onClick = {() => updateItemQuantity(item.id, item.quantity +1)}className='btn btn-outline-dark ms-1' >+</button>
                                    <button  onClick = {() => removeItem(item.id)}className='btn btn-outline-danger ms-5'>Remove</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='d-flex justify-content-between py-5 '>
                <button onClick={() => emptyCart()}className='btn btn-outline-danger'>Clear All</button>
                <h3>Total Price: ${cartTotal}</h3>
            </div>
            </div>
        </div>
    </div>
    
  ) 
}

export default Cart;

