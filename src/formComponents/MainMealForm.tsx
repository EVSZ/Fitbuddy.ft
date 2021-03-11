import * as React from 'react';
import './MainMealForm.css';
import { Form, Button, FormGroup, InputGroup } from 'react-bootstrap';

export interface MainMealFormProps {
    mainProperties: GeneralFormProperties;
    btnProperties: ButtonComponent;
    inputProperties: InputProperties;
}
export interface MainMealFormState {

}
interface GeneralFormProperties {
    mainClass: string;
    imagesClass: string;
    inputClass: string;
}
interface ButtonComponent {
    imageClass: string;
    image: string[];
    imgWidth: string;
    imgHeight: string;
    btnClass: string;
    btnVariant: string[];
    dietLabel: string[];
}
interface InputProperties {
    labelClass: string;
    labelText: string[];
    inputClass: string;
    inputType: string;
    inputMin: number[];
    inputMax: number[];
    inputStep: number[];
    inputName: string[];
    inputValue: number[];
    inputGroupTextClass: string[];
    inputGroupText: string[];
    btnClass: string[];
    btnVariant: string;
    btnImageCalculator: string;
}

class MainMealForm extends React.Component<MainMealFormProps, MainMealFormState> {
    ButtonImageWithLabel() {
        let imageArray = [];
        for (let i = 0; i < this.props.btnProperties.image.length; i++) {
            imageArray.push(
                <Form.Group className={this.props.btnProperties.imageClass}>
                    <div>
                        <Button variant={this.props.btnProperties.btnVariant[i]} className={this.props.btnProperties.btnClass}>
                            <img src={this.props.btnProperties.image[i]} alt="" width={this.props.btnProperties.imgWidth} height={this.props.btnProperties.imgHeight} />
                        </Button>
                        <Form.Label>
                            {this.props.btnProperties.dietLabel[i]}
                        </Form.Label>
                    </div>
                </Form.Group>
            );
        }
        return imageArray;
    };
    InputWithLabel() {
        let inputArray = [];
        for (let i = 0; i < this.props.inputProperties.inputValue.length; i++) {
            let button;
            if (this.props.inputProperties.btnClass[i] === "calcBtn") {
                button = <Button className={this.props.inputProperties.btnClass[i]} variant={this.props.inputProperties.btnVariant}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
                        <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                    </svg>
                </Button>
            } else {
                button = "";
            };
            inputArray.push(
                <div className={this.props.mainProperties.inputClass}>
                    <FormGroup>
                        <div className={this.props.inputProperties.labelClass}>
                            <Form.Label> {this.props.inputProperties.labelText[i]}</Form.Label>
                        </div>
                        <div className={this.props.inputProperties.inputClass}>
                            <InputGroup>
                                <Form.Control
                                    type={this.props.inputProperties.inputType}
                                    value={this.props.inputProperties.inputValue[i]}
                                    min={this.props.inputProperties.inputMin[i]}
                                    max={this.props.inputProperties.inputMax[i]}
                                    step={this.props.inputProperties.inputStep[i]}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text className={this.props.inputProperties.inputGroupTextClass[i]}>{this.props.inputProperties.inputGroupText[i]}</InputGroup.Text>
                                    {button}
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </FormGroup>
                </div>
            )
        }
        return inputArray;
    }
    render() {
        return (
            <>
                <Form className={this.props.mainProperties.mainClass}>
                    <div className={this.props.mainProperties.imagesClass}>
                        {this.ButtonImageWithLabel()}
                    </div>
                    {this.InputWithLabel()}
                </Form>
            </>
        );
    }
}

export default MainMealForm;