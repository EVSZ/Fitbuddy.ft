import './Login.css';
import { Button, InputGroup, Form } from 'react-bootstrap'
import { CSSProperties, useState } from 'react';
import axios from 'axios';

var style: CSSProperties = {
    color: 'red',
    fontWeight: 'lighter'
}
export default function Login() {
    const [state, setState] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [check, setCheck] = useState<string>("");

    function LoginOrRegister() {
        return state ?
            axios.post(`http://localhost:8080/user/login`, { username, password })
                .then(res => {
                    console.log(res);
                }) :
            axios.post(`http://localhost:8080/user/new`, { email, username, password })
                .then(res => {
                    console.log(res);
                })
    }

    function PasswordMatching() {
        return (password === check)
    }

    function RenderRegisterElements() {
        return (
            <>
                <Form.Group>
                    <Form.Label>
                        email adres
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                            value={email}
                            type="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                            data-testid="email"
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        password
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                            value={check}
                            type="password"
                            onChange={(e) => {
                                setCheck(e.target.value);
                            }}
                            required
                            data-testid="passCheck"
                        />
                    </InputGroup>
                </Form.Group>
            </>
        )
    }
    return (
        <section className="Container">
            <div>
                <h2>
                    {state ? "Login" : "Register"}
                </h2>
            </div>
            <div>
                <Form
                    className="Form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        !PasswordMatching() && !state ? alert("password must match") : LoginOrRegister();
                    }}
                >
                    <div>
                        <Form.Group>
                            <Form.Label>
                                username
                            </Form.Label>
                            <InputGroup>
                                <Form.Control
                                    value={username}
                                    type="text"
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                    data-testid="username"
                                />
                            </InputGroup>
                        </Form.Group>
                    </div>
                    {!state ? RenderRegisterElements() : null}
                    <div>
                        <Form.Group>
                            <Form.Label>
                                {!state ? "confirm password" : "password"}
                            </Form.Label>
                            <InputGroup>
                                <Form.Control
                                    value={password}
                                    type="password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    required
                                    data-testid="password"
                                />
                            </InputGroup>
                            <h6
                                style={style}
                                data-testid="passError"
                            >
                                {!PasswordMatching() && !state ? "password does not match" : null}
                            </h6>
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="ButtonContainer">
                            <div>
                                <Button
                                    className="submitButton"
                                    type="submit"
                                    data-testid="formSubmitBtn"
                                >
                                    {state ? "Login" : "Register"}
                                </Button>
                            </div>
                            <div>
                                <Button
                                    className="submitButton"
                                    onClick={() => {
                                        setState(!state)
                                        setEmail("")
                                        setPassword("")
                                        setCheck("")
                                    }}
                                    data-testid="formSwitchBtn"
                                >
                                    {state ? "Register" : "Login"}
                                </Button>
                            </div>
                        </Form.Group>
                    </div>
                </Form>
            </div>
        </section>
    )
}