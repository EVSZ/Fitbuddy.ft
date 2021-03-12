import * as React from 'react';
import './NavigationBar.css'

import { Navbar, Nav, Form, Button } from 'react-bootstrap';

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
        navArray.push(
            <Nav.Link key={i} className={linkStyling} href={inputArray[i]}>
                <p>
                    {inputArray[i]}
                </p>
            </Nav.Link>
        )
    };
    return navArray;
};
export function NavigationBar({navProps}: {navProps: NavigationProps}) {
    return (
        <Navbar className={navProps.styles.mainComponent}>
            <div className={navProps.styles.componentItem}>
                <img className={navProps.styles.image} src={navProps.navBarItems.logoImage} alt="" />
            </div>
            <Nav className={navProps.styles.componentItem}>
                {DisplayNavLinks(navProps.navBarItems.text, navProps.styles.links)}
            </Nav>
            <div className={navProps.styles.componentItem}>
                <Form inline>
                    <Button className={navProps.styles.button} variant={navProps.styles.btnVariant}>
                        Log-In
                    </Button>
                </Form>
            </div>
        </ Navbar>
    );
};