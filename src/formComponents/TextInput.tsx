let labelClass = "FormLabelLeft";
let inputClass = "FormInputRight";
let inputType = "number";
let btnCalc = "/images/logo.svg";

const InputFieldData = [
    {
        labelClass: labelClass,
        labelText: "I Want To Eat",
        inputClass: inputClass,
        inputType: "number",
        inputValue: 2500,
        inputStep: 25,
        inputMin: 100,
        inputMax: 10000,
        inputGroupTextClass: "",
        inputGroupText: "Calories",
        btnClass: "calcBtn",
        btnImageCalculator: btnCalc, //Fix this so its recognized 
        btnVariant: "outline-light",
        inputName: "calories"
    },
    {
        labelClass: labelClass,
        labelText: "In",
        inputClass: inputClass,
        inputType: inputType,
        inputValue: 4,
        inputStep: 1,
        inputMin:  1,
        inputMax: 9,
        inputGroupTextClass: "longAppend",
        inputGroupText: "Meals",
        btnClass: "",
        btnVariant: "outline-light",
        inputName: "meals"
    }
]

export default InputFieldData;