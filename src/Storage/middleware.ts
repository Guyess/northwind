import { configureStore, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AppState, store } from "./store";


export const logger =(store:ReturnType<typeof configureStore>) => (next :Dispatch) => (action: PayloadAction) =>{
        const result = next(action);//Must call next for sidpatch to work.
        console.log("Somthing changed...");
        return result;
}
// export function logger(store: ReturnType<typeof configureStore>) {
//     return function (next: Dispatch) {
//         return function (action: PayloadAction) {
//             //State not changed yet.
//             const result = next(action);//Must call next for sidpatch to work.
//             //state changed.
//             console.log("Somthing changed...");
//             return result;
         
//         }
//     }
// }
