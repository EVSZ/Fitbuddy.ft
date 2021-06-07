import * as React from 'react';
import './NavigationBar.css'

import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface NavigationProps {
    navBarItems: {
        logoImage: string;
        text: Array<string>;
    },
    styles: Styling;
};
interface Styling {
    mainComponent: string;
    componentItem: string;
    links: string;
    button: string;
    btnVariant: string;
    image: string;
};
function DisplayNavLinks(inputArray: string[], linkStyling: string) {
    let navArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        let link = "/" + inputArray[i];
        navArray.push(
            <Link to={link} key={i} className={linkStyling} href={inputArray[i]}>
                {inputArray[i]}
            </Link>
        )
        console.log(link);
    };
    return navArray;
};
export function NavigationBar({ navProps }: { navProps: NavigationProps }) {
    return (
        <Navbar className={navProps.styles.mainComponent}>
            <div className={navProps.styles.componentItem}>
                <Link to="/">
                    <img className={navProps.styles.image} src={navProps.navBarItems.logoImage} alt="" />
                </Link>
            </div>
            <Nav className={navProps.styles.componentItem}>
                {DisplayNavLinks(navProps.navBarItems.text, navProps.styles.links)}
            </Nav>
            <div className={navProps.styles.componentItem}>
                <Form inline>
                    {localStorage.getItem("logged") ?
                        <div className="logged">
                            <div>
                                <h1>{localStorage.getItem("username")}</h1>
                            </div>
                            <div>
                                <Button onClick={() => {
                                    localStorage.removeItem("logged")
                                    localStorage.removeItem("username")
                                    window.location.reload();
                                }}>Logout</Button>
                            </div>
                        </div> :
                        <Link to="/Login">
                            <Button onClick={() => {
                                console.log(localStorage.getItem("username"))
                            }} className={navProps.styles.button} variant={navProps.styles.btnVariant}>
                                Log-In
                </Button>                 </Link>}
                </Form>
            </div>
        </ Navbar>
    );
};