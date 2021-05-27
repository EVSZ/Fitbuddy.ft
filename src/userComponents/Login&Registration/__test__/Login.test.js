import { fireEvent, screen} from "@testing-library/react";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Login from '../Login';

let container = null

beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
});

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it("renders on the login page", () => {
    act(() => {
        render(<Login />, container)
    });
    expect(container.querySelector("h2")?.textContent).toBe("Login")
})

it("Click switches between registration and login", () => {
    act(() => {
        render(<Login />, container)
    });

    //create the button element, and trigger clicks
    const button = document.querySelector("[data-testid=formSwitchBtn]")
    expect(button?.innerHTML).toBe("Register")

    act(() => {
        fireEvent.click(button)
    });

    expect(button?.innerHTML).toBe("Login")

    act(() => {
        fireEvent.click(button)
    });

    expect(button?.innerHTML).toBe("Register")
})

it("keeps track of username but not password between login and registration", () => {
    act(() => {
        render(<Login />, container)
    });

    const username = document.querySelector("[data-testid=username]")
    const password = document.querySelector("[data-testid=password]")
    const button2 = document.querySelector("[data-testid=formSwitchBtn]")

    //newly generated elements are empty on the login form
    expect(username.value).toBe("")
    expect(password.value).toBe("")

    //fill in the elements with text
    act(() => {
        fireEvent.change(username, { target: { value: "evsz" } })
        fireEvent.change(password, { target: { value: "mati" } })
    });
    expect(username.value).toBe("evsz")
    expect(password.value).toBe("mati")

    //switch to registration form
    act(() => {
        button2.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(username.value).toBe("evsz")
    expect(password.value).toBe("")
})

it("It shows when password does not match while filling out form", () => {
    act(() => {
        render(<Login />, container)
    });

    const button = document.querySelector("[data-testid=formSwitchBtn]")
    const password = document.querySelector("[data-testid=password]")
    const message = document.querySelector("[data-testid=passError]")

    //switch to registration page
    act(() => {
        fireEvent.click(button)
    });
    expect(message.innerHTML).toBe("")

    //fill in password 1
    act(() => {
        fireEvent.change(password, { target: { value: "evsz" } })
    })
    expect(message.innerHTML).toBe("password does not match")

    //fill in password 2 (not matching)
    const pass = screen.getByTestId("passCheck")  
    act(() => {
        fireEvent.change(pass, { target: { value: "mati" } })
    })
    expect(message.innerHTML).toBe("password does not match")

    //fill in password 2 (matching)
    act(() => {
        fireEvent.change(pass, { target: { value: "evsz" } })
    })
    expect(message.innerHTML).toBe("")
})