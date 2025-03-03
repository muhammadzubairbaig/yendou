import { useContext } from "react";
import { CounterContext } from "@/context/CounterContext"; // Adjust path as needed

// Custom hook to use Counter Context
export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error("useCounter must be used within a CounterProvider");
    }
    return context;
};

