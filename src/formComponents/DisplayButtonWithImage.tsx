import * as React from 'react';
import { Form, Button } from 'react-bootstrap';
interface ButtonProperties {
    display: {
        Class: string;
        width: string;
        height: string;
    }
    image: string;
    btnVariant: string;
    btnLabel: string;
    setDietType?: React.MouseEventHandler<HTMLElement> | undefined;
}

export default function DisplayButtonWithImage({ properties }: { properties: ButtonProperties }) {
    return (
            <Form.Group className={properties.display.Class}>
                <div>
                    <Button onClick={properties.setDietType} 
                        variant={properties.btnVariant}>
                        <img src={properties.image}
                            alt=""
                            width={properties.display.width}
                            height={properties.display.height} 
                            />
                    </Button>
                    <label className={properties.btnLabel}>
                        {properties.btnLabel}
                    </label>
                </div>
            </Form.Group>
    );
}