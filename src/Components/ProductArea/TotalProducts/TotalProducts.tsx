import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { JsxEmit } from "typescript";
import { AppState, store } from "../../../Storage/store";
import "./TotalProducts.css";

export function TotalProducts(): JSX.Element {

    
    
    // const [count, setCount] = useState<number>(0);

    // useEffect(()=>{
    // //setCount(store.getState().products?.length);
    // const unsubscribe = store.subscribe(() => {
    //     setCount(store.getState().products?.length);
    // });
    //     return () => {unsubscribe()};
    // },[]);

    const count = useSelector <AppState, number>(state => state.products?.length);
    
     if(!count) return null;
    
     return (
         <div className="TotalProducts">
	 		<span>Total Products: {count}</span>
         </div>
     );
}
