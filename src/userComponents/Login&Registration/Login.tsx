import './Login.css';
import { Button, InputGroup, Form } from 'react-bootstrap'
import { useState } from 'react';
import axios from 'axios';

export default function Login() {

    function LoginOrReg(state: Boolean) {
        if (state === false) {
            return (
                <>
                    <Form.Group>
                        <Form.Label>email adres</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>username</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>confirm password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="password"
                                onChange={(e) => {
                                    setCheck(e.target.value);
                                }}
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                </>
            )
        } else {
            return (
                <>
                    <Form.Group>
                        <Form.Label>username</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                required
                            />
                        </InputGroup>
                    </Form.Group>
                </>
            )
        }
    }

    function ReturnState(state: Boolean) {
        if (state) {
            return "Login"
        } else {
            return "Register"
        }
    }
    const [state, setState] = useState<Boolean>(true);
    const [email, setEmail] = useState<String>("");
    const [username, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [check, setCheck] = useState<String>("");

    return (
        <div className="Container">
            <Form className="Form" onSubmit={(e) => {
                e.preventDefault();
                if (state) {
                    axios.post(`http://localhost:8080/user/login`, {username, password})
                        .then(res => {
                            console.log(res);
                        })
                } else {
                    if (password === check) {
                        axios.post(`http://localhost:8080/user/new`, { email, username, password })
                            .then(res => {
                                console.log(res);
                            })
                    }
                }

            }}>
                {LoginOrReg(state)}

                <Form.Group className="ButtonContainer">
                    <div>
                        <Button className="submitButton" type="submit">{ReturnState(state)}</Button>
                    </div>
                    <div>
                        <Button className="submitButton" onClick={() => {
                            if (state) {
                                setState(false);
                            } else {
                                setState(true);
                            }
                        }}>{ReturnState(!state)}</Button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    )
}