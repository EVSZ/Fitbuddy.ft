import * as React from 'react';
import { useState } from 'react';

interface Props {
    children: (
        count: number, 
        setCount: React.Dispatch<React.SetStateAction<number>>
        ) =>    //set paramaters
    JSX.Element | null;  //IMPORTANT RETURN JSX ELEMENT
}

export const Counter: React.FC<Props> = ({ children }) => {
    const [count, setCount] = useState(0);    
    return (
        <div>
            {children(count, setCount)}
        </div>
        );
};
/* <div>
        <TextInput  
      handleChange={e => {     calling a function
        e.type="number";
      }}
      /> 
      </div>
      <div>
        <Counter>
          {(yeet, setCount) => (
            <div>
              <button onClick={() => setCount(yeet + 1)}>+</button>              
              {yeet}
            </div>
          )}
        </Counter>
      </div> */
//Renderprops