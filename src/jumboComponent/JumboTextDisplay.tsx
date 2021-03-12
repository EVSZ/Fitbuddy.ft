import * as React from 'react';
import './JumboTextDisplay.css';

import { Jumbotron } from 'react-bootstrap';
interface JumboTextDisplayProps {
    textToDisplay: {
        input: string[];
        weight: string[];
    };    
    style:{
        class: string;
    }
};
function JumboInput(text: string[], weight: string[] ) {
    let inputArray = []
    for(let i=0; i< text.length; i++) {
        let MyTag = `h${weight[i]}` as keyof JSX.IntrinsicElements;
        inputArray.push(
                <MyTag key={i}> {text[i]} </MyTag>
        )
    }
    return inputArray;
}
export const JumboTextDisplay: React.FC<JumboTextDisplayProps> = ({textToDisplay, style}) => {
        return (
            <Jumbotron className={style.class}>
                {JumboInput(textToDisplay.input, textToDisplay.weight)}
            </Jumbotron>
        );
}