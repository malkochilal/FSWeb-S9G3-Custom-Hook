import { useState } from "react";
import { useLocaluseLocalStorage } from "./localStorageKullan";





export default function geceModuAc(initialMode) {
    const [geceModu, setGeceModu] = useState(initialMode);
    console.log("gece modu")
    return { geceModu, setGeceModu };


}

// export const useInput = initialValue => {
//     const [value, setValue] = useState(initialValue);
//     const handleChanges = updatedValue => {
//       setValue(updatedValue);
//     };
//     return [value, setValue, handleChanges];
//   };