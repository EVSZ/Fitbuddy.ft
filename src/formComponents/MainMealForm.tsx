import * as React from 'react';
import { useState } from 'react';
import './MainMealForm.css';
import { Form, Button, FormGroup, InputGroup } from 'react-bootstrap';

export interface MainMealFormProps {
    mainProperties: GeneralFormProperties;
    btnProperties: ButtonComponent;
    inputProperties: InputProperties;
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

function ButtonImageWithLabel(btnProperties: ButtonComponent) {
    let imageArray = [];
    for (let i = 0; i < btnProperties.image.length; i++) {
        imageArray.push(
            <Form.Group key={i} className={btnProperties.imageClass}>
                <div>
                    <Button variant={btnProperties.btnVariant[i]} className={btnProperties.btnClass}>
                        <img src={btnProperties.image[i]} alt="" width={btnProperties.imgWidth} height={btnProperties.imgHeight} />
                    </Button>
                    <Form.Label>
                        {btnProperties.dietLabel[i]}
                    </Form.Label>
                </div>
            </Form.Group>
        );
    }
    return imageArray;
}

function InputWithLabel(inputProperties: InputProperties, mainClass: string) {
    let inputArray = [];
    for (let i = 0; i < inputProperties.inputValue.length; i++) {
        let button;
        if (inputProperties.btnClass[i] === "calcBtn") {
            button = <Button className={inputProperties.btnClass[i]} variant={inputProperties.btnVariant}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                </svg>
            </Button>
        } else {
            button = "";
        };
        inputArray.push(
            <div key={i} className={mainClass}>
                <FormGroup>
                    <div className={inputProperties.labelClass}>
                        <Form.Label> {inputProperties.labelText[i]}</Form.Label>
                    </div>
                    <div className={inputProperties.inputClass}>
                        <InputGroup>
                            <Form.Control
                                type={inputProperties.inputType}
                                placeholder={inputProperties.inputValue[i].toString()}
                                min={inputProperties.inputMin[i]}
                                max={inputProperties.inputMax[i]}
                                step={inputProperties.inputStep[i]}
                            />
                            <InputGroup.Append>
                                <InputGroup.Text className={inputProperties.inputGroupTextClass[i]}>{inputProperties.inputGroupText[i]}</InputGroup.Text>
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

export default function MainMealForm({ mealFormProps }: { mealFormProps: MainMealFormProps }) {
    return (
        <>
            <Form className={mealFormProps.mainProperties.mainClass}>
                <div className={mealFormProps.mainProperties.imagesClass}>
                    {ButtonImageWithLabel(mealFormProps.btnProperties)}
                </div>
                {InputWithLabel(mealFormProps.inputProperties, mealFormProps.mainProperties.inputClass)}
            </Form>
        </>
    );
};