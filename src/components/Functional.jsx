import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Functional = () => {
    const [inputForm, setInputForm] = useState({
        Username: '',
        Email: '',
        Password: '',
        RePassword: '',
        Contact: '',
        DOB: ''

    });


    const inputHandler = (e) => {
        setInputForm({ ...inputForm, [e.target.name]: e.target.value });
    };
    const displayData = (e) => {
        e.preventDefault();
        // console.log(inputForm.Username)
        const Obj = {
            Name: inputForm.Username,
            Email: inputForm.Email,
            Pass: inputForm.Password,
            RePass: inputForm.RePassword,
            Contact: inputForm.Contact,
            DOB: inputForm.DOB
        }
        axios.post('htttsdjlkdjdsajs/asldadlds/ldsajd', Obj)

    }
    return (

        <div className='bbody mt-5 mb-5 me-5 ms-5'>
            <h2>Hello world,</h2>
            <form onSubmit={displayData}>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" name="Username" onChange={inputHandler} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" className="form-control" name="Email" onChange={inputHandler} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="Password" onChange={inputHandler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Confirm-password</label>
                    <input type="password" className="form-control" name="RePassword" onChange={inputHandler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Number</label>
                    <input type="number" className="form-control" name="Contact" onChange={inputHandler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" name="DOB" onChange={inputHandler} id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default Functional;