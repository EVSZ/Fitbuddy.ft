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
            <Nav.Link className={linkStyling} href={inputArray[i]}>
                <p>
                    {inputArray[i]}
                </p>
            </Nav.Link>
        )
    };
    return navArray;
};
export const NavigationBar: React.FC<NavigationProps> = ({ navBarItems, styles }) => {
    return (
        <Navbar className={styles.mainComponent}>
            <div className={styles.componentItem}>
                <img className={styles.image} src={navBarItems.logoImage} alt="" />
            </div>
            <Nav className={styles.componentItem}>
                {DisplayNavLinks(navBarItems.text, styles.links)}
            </Nav>
            <div className={styles.componentItem}>
                <Form inline>
                    <Button className={styles.button} variant={styles.btnVariant}>
                        Log-In
                    </Button>
                </Form>
            </div>
        </ Navbar>
    );
};