import { useEffect, useState } from "react";
import { Actions, KeyBinding, keyBindingFrom, match } from "./keybinding";
import { useKeyPress } from "./useKeyPress"; 

export const useKeyBinding:
  <R>(initActions: Actions<R>) => [
    (newActions: Actions<R>) => void,
    (keyBinding: KeyBinding) => void
  ]
  = <R,>(initActions: Actions<R>) => {
    const keyPress = useKeyPress();
    const [actions, setActions] = useState(initActions);
    const putAction = (newActions: Actions<R>) => setActions({ ...actions, ...newActions })
    const removeAction = (keyBinding: KeyBinding) => {
      const { [keyBinding.id]: _, ...remainingActions } = actions;
      setActions(remainingActions);
    };

    useEffect(() => {
      if (!keyPress) {
        return;
      }

      const keyBinding = keyBindingFrom(keyPress);

      if (!keyBinding) {
        return;
      }

      match(actions)(keyBinding);
    }, [keyPress]);

    return [putAction, removeAction];
  };