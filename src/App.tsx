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
        styles: { mainComponent: "NavBar", componentItem: "NavBarItems", links: "NavL", image: "NavImg", button: "NavBtn", btnVariant: "outline-info" }
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
        confirmProperties: {
          mainClass:"ConfirmButton",
          variant: "primary"
        }
      }} />
    </>
  );
};