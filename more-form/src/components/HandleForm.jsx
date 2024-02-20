import React, { useState } from 'react'

function HandleForm() {

    const [formData , setFormData] = useState({
        firstName:"",
        lastName:"",
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
        phone:"",
        address:""
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
    }
    const handleChange = (e)=>{
        setFormData((prevState)=>{
            return {...prevState, [e.target.id]: e.target.value}
        })
    }
    const {firstName, lastName, username, email, password, confirmPassword,phone, address} = formData;
  return (
    <div>Fill The Form
        <form onSubmit={handleSubmit}   style={{padding:"30px"}}>
            <label htmlFor="firstName">firstName</label>
            <input type='text' name='firstName' id='firstName' value={firstName} onChange={handleChange} />
            <br></br>
            <label htmlFor="lastName">lastName</label>
            <input type='text' name='lastName' id='lastName' value={lastName} onChange={handleChange} />
            <br></br>
            <label htmlFor="username">username</label>
            <input type='text' name='username' id='username' value={username} onChange={handleChange} />
            <br></br>
            <label htmlFor="email">email</label>
            <input type='email' name='email' id='email' value={email} onChange={handleChange} />
            <br></br>
            <label htmlFor="password">password</label>
            <input type='password' name='password' id='password' value={password} onChange={handleChange} />
            <br></br>
            <label htmlFor="confirmPassword">confirmPassword</label>
            <input type='password' name='confirmPassword' id='confirmPassword' value={confirmPassword} onChange={handleChange} />
            <br></br>
            <label htmlFor="phone">phone</label>
            <input type='number' name='phone' id='phone' value={phone} onChange={handleChange} />
            <br></br>
            <label htmlFor="address">address</label>
            <input type='text' name='' id='address' value={address} onChange={handleChange} />
            
            <br></br>
            <br></br>
            <input type='submit' value="singup" />


            
        </form>
    </div>
  )
}

export default HandleForm