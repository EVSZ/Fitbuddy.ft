import * as React from 'react';
import './MainMealForm.css';
import { useState } from 'react';
import { Form, Button, InputGroup, FormControl} from 'react-bootstrap';
import buttonData from './ImageButtonData';
import TextInput from './TextInput';

interface MainMealFormProps {
    mainProperties: GeneralFormProperties;
    confirmProperties: ConfirmButton;
    calories: number;
    meals: number;
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
    const [calories, setCalories] = useState<number>(mealFormProps.calories);
    const [meals, setMeals] = useState<number>(mealFormProps.meals);
    function processInput(index: number) {
        switch(index) {
            case 0:
                return calories;
            case 1:
                return meals;
        }
    };
    function onConfirm() {
        return console.log("Calories: "+  calories +   " Meals: " + meals );
    };
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
                {TextInput.map((input, index) => (
                    <div key={index} className={mealFormProps.mainProperties.inputClass}>
                        <Form.Group>
                            <div className={input.labelClass}>
                                <Form.Label>
                                    {input.labelText}
                                </Form.Label>
                            </div>
                            <div className={input.inputClass}>
                                <InputGroup>
                                    <FormControl
                                        type={input.inputType}
                                        defaultValue={processInput(index)}
                                        min={input.inputMin}
                                        max={input.inputMax}
                                        step={input.inputStep}
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text className={input.inputGroupTextClass}>
                                            {input.inputGroupText}
                                        </InputGroup.Text>
                                        {DisplayExtraButton(input.btnClass, input.btnVariant)}
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                        </Form.Group>
                    </div>
                ))}
                <div className={mealFormProps.confirmProperties.mainClass}>
                    <Button onClick={onConfirm} variant={mealFormProps.confirmProperties.variant}>
                        Generate!
                    </Button>
                </div>
            </Form>
        </>
    );
};

// {TextInput.map((input, index) => (
//     <div key={index} className={mealFormProps.mainProperties.inputClass}>
//         <Form.Group>
//             <div className={input.labelClass}>
//                 <Form.Label>
//                     {input.labelText}
//                 </Form.Label>
//             </div>
//             <div className={input.inputClass}>
//                 <InputGroup>
//                     <FormControl
//                         type={input.inputType}
//                         defaultValue={processInput(index)}
//                         min={input.inputMin}
//                         max={input.inputMax}
//                         step={input.inputStep}
//                         onChange={}
//                     />
//                     <InputGroup.Append>
//                         <InputGroup.Text className={input.inputGroupTextClass}>
//                             {input.inputGroupText}
//                         </InputGroup.Text>
//                         {DisplayExtraButton(input.btnClass, input.btnVariant)}
//                     </InputGroup.Append>
//                 </InputGroup>
//             </div>
//         </Form.Group>
//     </div>
// ))}