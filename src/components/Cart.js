import React, { useState, useEffect } from 'react';
import Axios from "axios";

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const url = "http://localhost:5000/cart";
        Axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => {
                //console.log(res.data);
                setCart(res.data);
                //console.log(cart);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleClick = () => {
        let url = "http://localhost:5000/order";
        Axios.post(url, {}, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => {
                console.log(res.data);
                console.log("Post api of orders called")
            })
    }

    return (
        <div className='container my-3'>
            <div className="card">
                <h5 className="card-header">Order #1</h5>
                {cart.length !== 0 && cart.map((c, ind) => (<div className="card-body">
                    <h5 className="card-title">Customized Pizza {ind + 1}</h5>
                    <p className="card-text">Crust: {c?.crust}</p>
                    <p className="card-text">Veg Topping: {c?.vegTopping}</p>
                    <p className="card-text">Non-Veg Topping: {c?.nonVegTopping}</p>
                </div>))}
            </div>
            <a href="/" className="btn btn-primary my-2">
                Add More Pizza
            </a>
            <a href="/allOrders" onClick={handleClick} className="btn btn-primary my-2 mx-2">
                Checkout
            </a>
        </div>
    )
}

export default Cart