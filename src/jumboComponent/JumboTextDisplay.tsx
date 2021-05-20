import './JumboTextDisplay.css';
import { Jumbotron } from 'react-bootstrap';
import { useState } from 'react';
interface JumboTextDisplayProps {
    textToDisplay: {
        input: string[];
        weight: string[];
    };
    style: {
        class: string;
    }
};
function JumboInput(text: string[], weight: string[]) {
    let inputArray = []
    for (let i = 0; i < text.length; i++) {
        let MyTag = `h${weight[i]}` as keyof JSX.IntrinsicElements;
        inputArray.push(
            <MyTag key={i}> {text[i]} </MyTag>
        )
    }
    return inputArray;
}
function JumboTextDisplay({props}: { props: JumboTextDisplayProps}) {
    const [visible] = useState<boolean>(true);
    return visible ?(
        <div>
            <Jumbotron className={props.style.class}>
                {JumboInput(props.textToDisplay.input, props.textToDisplay.weight)}
            </Jumbotron>
        </div>
    ) : <div/>
}

export default JumboTextDisplay;