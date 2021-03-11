import * as React from 'react';
import { useReducer } from 'react';

type Actions = 
    |   { type: "add"; text: string }
    |   {
        type: "remove";
        idx: number;
    };

interface Todo {
    text: string;
    complete: boolean;
    }

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => { // setup the states that you have and what actions to use
    switch (action.type) {
        case "add":
            return [...state, { text: action.text, complete: false }];
        case "remove":
            return state.filter((_, i) => action.idx !== i);
        default:
            return state;
    }
};

export const ReducerExample: React.FC = () => {
    const [todos, dispatch] = useReducer(TodoReducer, [])

    return (
        <div>
            {JSON.stringify(todos)}
            <button
                onClick={() => {
                    dispatch({type: "add", text: "wasup"})
                }}>
            +
            </button>
        </div>
    );
};