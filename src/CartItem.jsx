import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    // Acceder al estado del carrito desde Redux
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calcular el monto total de todos los productos en el carrito
    const calculateTotalAmount = () => {
        let total = 0;
        cart.forEach(item => {
            const price = parseFloat(item.cost.substring(1)); // remover '$' y convertir a número
            total += price * item.quantity;
        });
        return total.toFixed(2);
    };

    const handleContinueShopping = (e) => {
        onContinueShopping(e);
    };

    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
    };

    // Incrementar la cantidad de un item en el carrito
    const handleIncrement = (item) => {
        // Despachar updateQuantity para aumentar la cantidad en 1
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    // Decrementar la cantidad de un item en el carrito
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            // Si la cantidad es mayor que 1, disminuir en 1
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            // Si la cantidad es 1, eliminar el item completamente
            dispatch(removeItem(item.name));
        }
    };

    // Eliminar un item completamente del carrito
    const handleRemove = (item) => {
        // Despachar removeItem para eliminar el artículo por nombre
        dispatch(removeItem(item.name));
    };

    // Calcular el costo total de un item basado en su cantidad
    const calculateTotalCost = (item) => {
        const price = parseFloat(item.cost.substring(1));
        return (price * item.quantity).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cart.map(item => (
                    <div className="cart-item" key={item.name}>
                        <img className="cart-item-image" src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-cost">{item.cost}</div>
                            <div className="cart-item-quantity">
                                <button
                                    className="cart-item-button cart-item-button-dec"
                                    onClick={() => handleDecrement(item)}
                                >
                                    -
                                </button>
                                <span className="cart-item-quantity-value">{item.quantity}</span>
                                <button
                                    className="cart-item-button cart-item-button-inc"
                                    onClick={() => handleIncrement(item)}
                                >
                                    +
                                </button>
                            </div>
                            <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                            <button
                                className="cart-item-delete"
                                onClick={() => handleRemove(item)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
            <div className="continue_shopping_btn">
                <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>
                    Continue Shopping
                </button>
                <br />
                <button className="get-started-button1" onClick={handleCheckoutShopping}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartItem;