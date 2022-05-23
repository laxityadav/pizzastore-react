import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    crust: "",
    vegTopping: "",
    nonVegTopping: ""
  });

  const url = "http://localhost:5000/cart";
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      crust: data.crust,
      vegTopping: data.vegTopping,
      nonVegTopping: data.nonVegTopping
    }, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => {
        console.log(res.data);
      })
    navigate("/cart");
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <>
      <div className="container my-3">
        <h2>Hi there, this is the Pizza Store</h2>
        <Button className="my-3" variant="primary" onClick={handleShow}>
          Customize a Pizza
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Customize Pizza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => submit(e)}>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="crust">Crust</Form.Label>
                <Form.Select id="crust" onChange={(e) => handle(e)}>
                  <option>None</option>
                  <option>Hand Tossed</option>
                  <option>Wheat Thin Crust</option>
                  <option>Cheese Burst</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="vegTopping">Veg Topping</Form.Label>
                <Form.Select id="vegTopping" onChange={(e) => handle(e)}>
                  <option>None</option>
                  <option>Tomato</option>
                  <option>Onion</option>
                  <option>Capcicum</option>
                  <option>Black Olive</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="nonVegTopping">Non-Veg Topping</Form.Label>
                <Form.Select id="nonVegTopping" onChange={(e) => handle(e)}>
                  <option>None</option>
                  <option>Chicken Tikka</option>
                  <option>Chicken Pepproni</option>
                  <option>Peri Peri Chicken</option>
                </Form.Select>
              </Form.Group>
              <Button type="submit">Submit</Button>
            </fieldset>
          </Form>
        </Modal.Body>
      </Modal></>

  );
};

export default Home;