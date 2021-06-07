import { Button, Form } from 'react-bootstrap'
import React, { useState } from 'react';
import axios from 'axios';

import './Login.css';

function errorHandler(error) {
    if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
}
function Login() {
    const [state, setState] = useState(true)
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [check, setCheck] = useState("")

    const [exists, setExists] = useState(false)
    const [existsM, setExistsM] = useState(false)
    const [created, setCreated] = useState(false)
    const [loggedUser, setLoggedUser] = useState(false)
    const [faulty, setFaulty] = useState(false)

    function LoginOrRegister() {
        return state ?
            axios.post(`http://localhost:8080/user/login`, { username, password })
                .catch(function (error) {
                    errorHandler(error)
                })
                .then(res => {
                    if (res.data) {
                        localStorage.setItem("username", username)
                        localStorage.setItem("logged", true)
                        console.log(localStorage.getItem("username"))
                        setLoggedUser(true)
                        setFaulty(false)
                        window.location.reload();
                        // alert(`Welcome back ${username}`)
                    } else {
                        setFaulty(true)
                        setLoggedUser(false)
                        // alert(`I dont know you yet ${username}`)

                    }
                }) :
            axios.post(`http://localhost:8080/user/new`, { email, username, password })
                .then(res => {
                    if (res.data.username === username && res.data.email === email) {
                        setExistsM(true)
                        setExists(true)
                    } else if (res.data.username === username || res.data.email === email) {
                        if (res.data.email === email) {
                            setExistsM(true)
                            setExists(false)
                        } else if (res.data.username === username) {
                            setExists(true)
                            setExistsM(false)
                        }
                    } else {
                        setExistsM(false)
                        setExists(false)
                        setCreated(true)
                    }
                })
    }
    function PasswordMatching() {
        return (password === check)
    }
    return (
        <section className="Container">
            <div>
                <h2>
                    {state ? "Login" : "Registration"}
                </h2>
            </div>
            <div className="Form"
                data-testid="mainContainer">
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        !PasswordMatching() && !state ? alert("password must match") : LoginOrRegister();
                    }}
                >
                    <div className="element">
                        <label className="formLabel">username
                            <input
                                className=""
                                value={username}
                                type="text"
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                    setFaulty(false)
                                }}
                                data-testid="username"
                                required />
                        </label>
                    </div>
                    {exists && existsM ? <h6 data-testid="existsError">
                        This username and email combination exists</h6> : null}
                    {exists && !existsM ? <h6 data-testid="existsError">
                        This username has already been taken</h6> : null}
                    {!state ?
                        <>
                            <div className="element">
                                <label className="formLabel">email adres
                                    <input
                                        className=""
                                        value={email}
                                        type="email"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        data-testid="email"
                                        required />
                                </label>
                            </div>
                            {existsM ? <h6 data-testid="existsError">
                                This email adres already has an account</h6> : null}
                            <div className="element">
                                <label className="formLabel">password
                                    <input
                                        className=""
                                        value={check}
                                        type="password"
                                        onChange={(e) => {
                                            setCheck(e.target.value);
                                        }}
                                        data-testid="passCheck"
                                        required />
                                </label>
                            </div>
                        </> : null}
                    <div className="element">
                        <label className="formLabel">
                            {!state ? "confirm password" : "password"}
                            <input
                                className=""
                                value={password}
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                data-testid="password"
                                required />
                        </label>
                    </div>
                    <div>
                        {!PasswordMatching() && !state ?
                            <h6 data-testid="passError">password does not match </h6>
                            : null}
                    </div>
                    <div>
                        {created ? <h6>Your account has been created {username}!</h6> : null}
                    </div>
                    <div>
                        {loggedUser ? <h6>
                            Welcome back {username}!
                            </h6> : null}
                    </div>
                    <div>
                        {faulty ? <h6>
                            I dont know you {username}!
                            </h6> : null}
                    </div>
                    <div className="ButtonContainer">
                        <div>
                            <Button
                                variant="danger"
                                type="submit"
                                data-testid="formSubmitBtn"
                            >
                                Submit
                            </Button>
                        </div>
                        <div>
                            <Button
                                variant="outline-info"
                                onClick={() => {
                                    setState(!state)
                                    setExists(false)
                                    setExistsM(false)
                                    setCreated(false)
                                    setFaulty(false)
                                    setLoggedUser(false)
                                    setEmail("")
                                    setPassword("")
                                    setCheck("")
                                }}
                                data-testid="formSwitchBtn"
                            >
                                {state ? "Sign-Up" : "Login"}
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </section>
    )
}
export default Login;