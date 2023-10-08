import { useCallback } from "react";
import { useState } from "react";

/**
 * @description Well known custom hook usefull for checkboxes
 */
export function useToggle(defaultState: boolean): [boolean, () => void] {
    const [toggled, setToggled] = useState<boolean>(defaultState);

    const toggle = useCallback(() => {
        setToggled(toggled => !toggled);
    }, [setToggled])

    return [toggled, toggle];
}