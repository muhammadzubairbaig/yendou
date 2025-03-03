import { useState, useEffect, useCallback } from "react";
import { useCounter } from "@/hooks/useCounter";
import { Button } from "../ui/button";
import { useToastService } from "@/services/useToastService";
import { ACTIONS } from "@/utils/constant";

export const Counter = () => {
  const { state, dispatch } = useCounter();
  const { showToast } = useToastService();
  const [lastAction, setLastAction] = useState<keyof typeof ACTIONS | null>(null);

  // useCallback for optimization, memoizing the function to avoid unnecessary re-creations
  const handleClick = useCallback(
    (action: keyof typeof ACTIONS) => {
      setLastAction(action);
      dispatch({ type: ACTIONS[action] });
    },
    [dispatch]
  );

  useEffect(() => {
    if (lastAction) {
      // Dynamic message with improved readability
      const actionLabel = lastAction.charAt(0).toUpperCase() + lastAction.slice(1).toLowerCase();
      const message = `Counter has been updated. Current value: ${state.count}`;

      showToast(actionLabel, message, 'success'); // Show toast notification with action label and message
      setLastAction(null); // Reset after showing toast
    }
  }, [state.count, lastAction, showToast]);

  return (
    <div className="counter-container">
      {/* Counter Text Section */}
      <div className="counter-text">
        Current count
        <div className="counter-number">{state.count}</div>
      </div>

      {/* Buttons Section */}
      <div className="space-x-4">
        <Button variant="secondary" onClick={() => handleClick(ACTIONS.INCREMENT)} aria-label="Increment by 1">
          +1
        </Button>
        <Button variant="outline" onClick={() => handleClick(ACTIONS.DECREMENT)} aria-label="Decrement by 1">
          -1
        </Button>
        <Button variant="default" onClick={() => handleClick(ACTIONS.RESET)} aria-label="Reset counter">
          Reset
        </Button>
      </div>
    </div>
  );
};
