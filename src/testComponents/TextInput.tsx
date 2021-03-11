import * as React from 'react';

export interface Person {
    firstName: string;
    lastName: string;
    adress: string;
    city: string;
    country: string;
}

export interface TextInputProps {
    person?: Person
    interests?: string;
    ranking?: number;
    adult?: boolean;
    addToRanking?: (person: Person) => void;
    // ? = optional
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;   // function for change
}

// Create a react functional component 'SFC' and pass the < 'props' >
const TextInput: React.FC<TextInputProps> = ({handleChange}) => {   //import change function here
    // const [count, setCount] = React.useState<number | null>(5);    // define type here, also interfaces and objects
    // setCount(null); // Cant set to null because type is not defined

    const inputRef = React.useRef<HTMLInputElement>(null);  // input the type reference, and set a value for it
    const divRef = React.useRef<HTMLDivElement>(null);

    return ( 
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange}/>   {/*type reference from here */}
        </div>
     );
}
 
export default TextInput;