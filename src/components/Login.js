import React from 'react'
import { Link } from 'react-router-dom'

export default function Login(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
  }
  
  return (
    <div style={myStyle} >
    <form>
      <h3>Login</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          autoComplete="username"
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          autoComplete="current-password"
        />
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <div className="d-grid" >
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="new-user-register text-right">
        If new user <Link to="/SignUp">REGISTER</Link>
      </p>
    </form>
    </div>
  )
}
