import React, { useState, useEffect } from 'react'
import Axios from "axios";

function AllOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let url = "http://localhost:5000/order";
        Axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => {
                //console.log(res.data);
                setOrders(res.data);
                //console.log(orders);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className='container'>
            {orders.length != 0 && orders.map((order, ind) => (
                <div className="card my-3">
                    <h5 className="card-header">Order #{ind + 1}</h5>
                    {order.map((ord, i) => (<div className="card-body">
                        <h5 className="card-title">Customized Pizza {i + 1}</h5>
                        <p className="card-text">Crust: {ord?.crust}</p>
                        <p className="card-text">Veg Topping: {ord?.vegTopping}</p>
                        <p className="card-text">Non-Veg Topping: {ord?.nonVegTopping}</p>
                    </div>))}
                </div>))}
        </div>
    )
}

export default AllOrders