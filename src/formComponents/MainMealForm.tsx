import * as React from 'react';
import './MainMealForm.css';
import './ExtendedMealForm.css';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import DisplayInputGroups from './DisplayInputGroup';
import DisplayButtonWithImage from './DisplayButtonWithImage';

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
export default function MainMealForm({ mealFormProps }: { mealFormProps: MainMealFormProps }) {
    const [calories, setCalories] = useState<number>(2500);
    const [meals, setMeals] = useState<number>(4);
    const [dietType, setDietType] = useState<string>("Everything");
    const [calcBtnClass, setCalcBtnClass] = useState<string>("");
    const [extendedFormClass, setExtendedFormClass] = useState<string>("FormHide");    
    const button = (<Button onClick={() => {
        setCalcBtnClass("calcBtn");
        setExtendedFormClass("FormShow");
    }} className={calcBtnClass} variant="outline-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
            <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
        </svg>
    </Button>);
    function DisplayExtendedMealForm() {
        return (
            <div className="MainClass">
                <div className={extendedFormClass}> 
                <Button onClick={() => {
                    setCalcBtnClass("");
                    setExtendedFormClass("FormHide");
                }}>
                    REVERT
                </Button>
                </div>
            </div>
        );
    };
    return (
        <>
            <Form onSubmit={(e) => {
                e.preventDefault();
                alert("Calories " + calories + " Meals " + meals + " DietType: " + dietType);
            }} className={mealFormProps.mainProperties.mainClass}>
                <div className={mealFormProps.mainProperties.imagesClass}>
                    <DisplayButtonWithImage properties={{
                        display: {
                            Class: "DietType",
                            width: "50px",
                            height: "50px"
                        },
                        image: "/images/dietEverything.png",
                        btnLabel: "Everything",
                        btnVariant: "outline-success",
                        setDietType: () => {
                            setDietType("Everything");
                        }
                    }}
                    />
                    <DisplayButtonWithImage properties={{
                        display: {
                            Class: "DietType",
                            width: "50px",
                            height: "50px"
                        },
                        image: "/images/dietPaleo.png",
                        btnLabel: "Paleo",
                        btnVariant: "outline-info",
                        setDietType: () => {
                            setDietType("Paleo");
                        }
                    }}
                    />
                    <DisplayButtonWithImage properties={{
                        display: {
                            Class: "DietType",
                            width: "50px",
                            height: "50px"
                        },
                        image: "/images/dietKeto.png",
                        btnLabel: "Keto",
                        btnVariant: "outline-warning",
                        setDietType: () => {
                            setDietType("Keto");
                        }
                    }}
                    />
                    <DisplayButtonWithImage properties={{
                        display: {
                            Class: "DietType",
                            width: "50px",
                            height: "50px"
                        },
                        image: "/images/dietVegetarian.png",
                        btnLabel: "Vegetarian",
                        btnVariant: "outline-danger",
                        setDietType: () => {
                            setDietType("Vegetarian");
                        }
                    }}
                    />
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
                    displayExtraButton: button,
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
                    <Button type="submit"
                        variant={mealFormProps.confirmProperties.variant}>
                        Generate!
                    </Button>
                </div>
                {/* CHECK what is up cause this aint workin right :c
                    <DisplayExtendedMealForm />  
                */}
            </Form>
        </>
    );
};