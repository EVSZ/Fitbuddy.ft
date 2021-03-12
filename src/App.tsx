import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './navComponent/NavigationBar';
import { JumboTextDisplay } from './jumboComponent/JumboTextDisplay';
import MainMealForm from './formComponents/MainMealForm';

export default function App() {
  return (
    <>
      <NavigationBar navProps={{
        navBarItems: { logoImage: "/images/fitbuddy.jpg", text: ["Products", "Personal"] },
        styles: { mainComponent: "NavBar", componentItem: "NavBarItems", links: "NavL", image: "NavImg", button: "NavBtn", btnVariant: "outline-primary" }
      }} />
      <JumboTextDisplay style={{ class: "h1Jumbo" }}
        textToDisplay={{
          weight: ["3", "3", "3", "4", "2", "1"],
          input: ["Having a difficult time with planning a diet?",
            "In the mood to explore new recipes?",
            "Want to get fit?",
            "Fitbuddy creates the perfect meal plan for you based on your preferences and goals",
            "Let me do the thinking",
            "You do the eating"],
        }} />
      <MainMealForm mealFormProps={{
        mainProperties: {
          mainClass: "MealForm",
          imagesClass: "MainFormImages",
          inputClass: "MealFormInput"
        },
        btnProperties: {
          imageClass: "dietType",
          image: ["/images/dietEverything.png",
            "/images/dietPaleo.png",
            "/images/dietVegetarian.png",
            "/images/dietKeto.png"],
          imgWidth: "50px",
          imgHeight: "50px",
          dietLabel: ["Anything",
            "Paleo",
            "Vegetarian",
            "Keto"],
          btnClass: "imrBtn",
          btnVariant: ["outline-success",
            "outline-info",
            "outline-danger",
            "outline-warning"]
        }, inputProperties: {
          labelClass: "FormLabelLeft",
          labelText: ["I Want To Eat", "In"],
          inputClass: "FormInputRight",
          inputType: "number",
          inputValue: [2500, 4],
          inputStep: [25, 1],
          inputMin: [100, 1],
          inputMax: [10000, 9],
          inputGroupTextClass: ["", "longAppend"],
          inputGroupText: ["Calories", "Meals"],
          btnClass: ["calcBtn", ""],
          btnImageCalculator: "/images/logo.svg", //Fix this so its recognized 
          btnVariant: "outline-light",
          inputName: ["calories", "meals"]
        }
      }} />
    </>
  );
};