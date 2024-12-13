import { createContext, useReducer } from "react";


export const CountContext = createContext()

const initialState = {count: 0};


export function reducer(state, action){
    switch(action.type){
        case "INCREMENT":
        return {count: state.count + 1}
        case "DECREMENT":
            return {count: state.count - 1}
            case "RESET":
                return {count: 0}
            default:
            return state;
    }
}


export function CountProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CountContext.Provider value={{state, dispatch}}>
            {children}
        </CountContext.Provider>
    )
}

export default CountProvider;