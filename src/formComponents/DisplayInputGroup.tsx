import * as React from 'react';
import { Form, InputGroup, FormControl, Button} from 'react-bootstrap';

interface InputGroupProperties {
    mainClass: string;
    inputClass: string;
    name: string;
    type: string;
    value: number;
    min: number;
    max: number;
    step: number;
    inputGroupText: string;
    inputGroupTextClass?: string;
    labelClass: string;
    labelText: string;
    event?: any;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    displayExtraButton?: JSX.Element;
}

export default function DisplayInputGroup({ properties }: { properties: InputGroupProperties }) {
    return (
        <div className={properties.mainClass}>
            <Form.Group>
                <div className={properties.labelClass}>
                    <Form.Label>
                        {properties.labelText}
                    </Form.Label>
                </div>
                <div className={properties.inputClass}>
                    <InputGroup>
                        <FormControl
                            type={properties.type}
                            value={properties.value}
                            min={properties.min}
                            max={properties.max}
                            step={properties.step}
                            onChange={properties.onChange}
                            required
                        />
                        <InputGroup.Append>
                            <InputGroup.Text className={properties.inputGroupTextClass}>
                                {properties.inputGroupText}
                            </InputGroup.Text>
                                {properties.displayExtraButton}
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </Form.Group>
        </div>
    );
}