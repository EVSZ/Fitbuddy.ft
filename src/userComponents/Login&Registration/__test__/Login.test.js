/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { fireEvent, screen} from "@testing-library/react";
 import { render, unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";
 
 import Login from '../Login';
 let container = null;
 
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
     //render the main component into the document
     act(() => {
         render(<Login />, container)
     });
 
     //component initialized on the Login screen
     expect(container.querySelector("h2")?.textContent).toBe("Login")
 })
 
 it("Click switches between registration and login", () => {
     act(() => {
         render(<Login />, container)
     });
 
     const button = document.querySelector("[data-testid=formSwitchBtn]")
 
     //on the login page the button says Sign-Up
     expect(button?.innerHTML).toBe("Sign-Up")
 
     //go to register page
     act(() => {
         fireEvent.click(button)
     });
     //on the register page button says Login
     expect(button?.innerHTML).toBe("Login")
 
     //switch back to login page
     act(() => {
         fireEvent.click(button)
     });
     expect(button?.innerHTML).toBe("Sign-Up")
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
     const page = document.querySelector("[data-testid=mainContainer]")
 
     //switch to registration page
     act(() => {
         fireEvent.click(button)
     });
     expect(page.textContent).not.toContain("password does not match")
 
     //fill in password 1
     act(() => {
         fireEvent.change(password, { target: { value: "evsz" } })
     })
     expect(page.textContent).toContain("password does not match")
 
     //fill in password 2 (not matching)
     const pass = screen.getByTestId("passCheck")  
     act(() => {
         fireEvent.change(pass, { target: { value: "mati" } })
     })
     expect(page.textContent).toContain("password does not match")
 
     //fill in password 2 (matching)
     act(() => {
         fireEvent.change(pass, { target: { value: "evsz" } })
     })
     expect(page.textContent).not.toContain("password does not match")
 })
 // it("Logs in a registered user", () => {
 //    act(() => {
 //        render(<Login />, container)
 //    })
 
 //    const button = document.querySelector("[data-testid=formSubmitBtn]")
 //    const username = document.querySelector("[data-testid=username]")
 //    const password = document.querySelector("[data-testid=password]")
 
 //    act(() => {
 //        fireEvent.change(username, { target: { value: "evsz"}})
 //        fireEvent.change(password, { target: { value: "2College"}})
 //    })
 //    expect(username.value).toBe("evsz")
 //    expect(password.value).toBe("2College")
 
 // })