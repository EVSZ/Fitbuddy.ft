import * as React from 'react';
import './MainMealForm.css';
import { useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import buttonData from './ImageButtonData';
import DisplayInputGroups from './DisplayInputGroup';

interface MainMealFormProps {
    mainProperties: GeneralFormProperties;
    confirmProperties: ConfirmButton;
}
interface GeneralFormProperties {
    mainClass: string;
    imagesClass: string;
    inputClass: string;
}
interface ConfirmButton {
    mainClass: string;
    variant: string;
}
function DisplayExtraButton(buttonToDisplay: string, btnVariant: string) {
    let button;
    if (buttonToDisplay === "calcBtn") {
        button = <Button className={buttonToDisplay} variant={btnVariant}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
            </svg>
        </Button>
    } else {
        button = "";
    };
    return button;
};
export default function MainMealForm({ mealFormProps }: { mealFormProps: MainMealFormProps }) {
    const [calories, setCalories] = useState<number>(2500);
    const [meals, setMeals] = useState<number>(4);
    return (
        <>
            <Form className={mealFormProps.mainProperties.mainClass}>
                <div className={mealFormProps.mainProperties.imagesClass}>
                    {buttonData.map((button, index) => (
                        <Form.Group key={index} className={button.display.mainClass}>
                            <div>
                                <Button variant={button.btnVariant}>
                                    <img src={button.image}
                                        alt=""
                                        width={button.display.Width}
                                        height={button.display.Height} />
                                </Button>
                                <Form.Label>
                                    {button.dietLabel}
                                </Form.Label>
                            </div>
                        </Form.Group>
                    ))}
                </div>
                <DisplayInputGroups properties={{
                    mainClass: mealFormProps.mainProperties.inputClass,
                    labelClass: "FormLabelLeft",
                    labelText: "I Want To Eat",
                    inputClass: "FormInputRight",
                    type: "number",
                    value: calories,
                    min: 100,
                    max: 10000,
                    step: 25,
                    onChange: (e) => {
                        setCalories(parseInt(e.target.value))
                    },
                    inputGroupTextClass: "",
                    inputGroupText: "Calories",
                    name: "calories",
                    displayExtraButton: DisplayExtraButton("calcBtn", "outline-light"),
                }} />
                <DisplayInputGroups properties={{
                    mainClass: mealFormProps.mainProperties.inputClass,
                    labelClass: "FormLabelLeft",
                    labelText: "In",
                    inputClass: "FormInputRight",
                    type: "number",
                    value: meals,
                    min: 1,
                    max: 9,
                    step: 1,
                    onChange: (e) => {
                        setMeals(parseInt(e.target.value))
                    },
                    inputGroupTextClass: "longAppend",
                    inputGroupText: "Meals",
                    name: "meals",
                }} />
                <div className={mealFormProps.confirmProperties.mainClass}>
                    <Button onClick={() => {
                        alert("Calories " + calories + " Meals " + meals);
                    }}
                        variant={mealFormProps.confirmProperties.variant}>
                        Generate!
                    </Button>
                </div>
            </Form>
        </>
    );
};