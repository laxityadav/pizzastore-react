import React, { useState } from 'react'
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        phonenumber: ""
    });

    const url = "http://localhost:5000/register";
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            username: data.username,
            email: data.email,
            password: data.password,
            phonenumber: data.phonenumber
        })
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
            })
        navigate("/");
    }

    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    return (
        <div className='container'>
            <section className="h-100 h-custom" style={{ backgroundColor: '#8fc4b7' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-xl-6">
                            <div className="card rounded-3">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                                    className="w-100" style={{ borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem' }}
                                    alt="Sample" />
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Form</h3>

                                    <form className="px-md-2" onSubmit={(e) => submit(e)}>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="username" onChange={(e) => handle(e)} className="form-control" />
                                            <label className="form-label" htmlFor="username">Username</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="text" id="email" onChange={(e) => handle(e)} className="form-control" />
                                            <label className="form-label" htmlFor="email">Email</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" id="password" onChange={(e) => handle(e)} className="form-control" />
                                            <label className="form-label" htmlFor="password">Password</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="text" id="phonenumber" onChange={(e) => handle(e)} className="form-control" />
                                            <label className="form-label" htmlFor="phonenumber">Phone Number</label>
                                        </div>

                                        <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup