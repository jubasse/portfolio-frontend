import { useContext } from "react";
import { ProfileContext } from "../contexts";

export function useProfileContext() {
    const profile = useContext(ProfileContext);

    return profile;
}