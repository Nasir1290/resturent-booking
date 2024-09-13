import { useContext } from "react";
import { openProfileContext } from "../providers/OpenProfileProvider";

const useOpenProfile = () => {
    return useContext(openProfileContext);
}

export default useOpenProfile;