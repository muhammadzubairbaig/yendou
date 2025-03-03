import { ACTIONS } from "@/utils/constant";
import React, { createContext, useReducer, ReactNode } from "react";



// Define available action types
type CounterAction = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESET" };

// Define CounterContext Type
interface CounterContextType {
    state: CounterState;
    dispatch: React.Dispatch<CounterAction>;
}

// Define the shape of Counter State
interface CounterState {
    count: number;
}

// Create Context
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Reducer function to handle actions
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: state.count > 0 ? state.count - 1 : state.count };
        case ACTIONS.RESET:
            return { count: 0 };
        default:
            return state;
    }
};

// CounterProvider component
interface CounterProviderProps {
    children: ReactNode;
}

export const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
};

// Export Context
export { CounterContext };
