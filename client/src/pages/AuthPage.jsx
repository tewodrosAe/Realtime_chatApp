import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AuthPage = (props) => {
  const [username, setUsername] = useState('')
  const [secret, setSecret] = useState('')
  const [email, setEmail] = useState('')

  const onLogin = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/authenticate/login', { username,secret })
      .then((r) => props.onAuth({ ...r.data, secret }))
      .catch((e) => console.log(JSON.stringify(e.response.data)))
  }
  const erase = () => {
    setUsername('')
    setEmail('')
    setSecret('')
  }
  const onSignup = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/authenticate/signup', {
        username,
        secret,
        email,
      })
      .then((r) => props.onAuth({ ...r.data, secret }))
      .catch((e) => console.log(JSON.stringify(e.response.data)))
  }

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form onSubmit={onSignup}>
          <label htmlFor='chk' aria-hidden="true" onClick={erase}>
            Sign up
          </label>
          <input
            type="text"
            name="txt"
            placeholder="User name"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            required
            onChange={(e) => setSecret(e.target.value)}
            value={secret}
          />
          <button>Sign up</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={onLogin}>
          <label htmlFor='chk' aria-hidden="true" onClick={erase}>
            Login
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required=""
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
            onChange={(e) => setSecret(e.target.value)}
            value={secret}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default AuthPage
