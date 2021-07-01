import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions/templateActions";

const Hooks = () => {
    //global state variable
    const count = useSelector(state => state.template.counter);

    //loca state
    const [title, setTitle] = useState("ReduxTemplate");

    //recieve dispatch function
    const dispatch = useDispatch();

    //componentDidMount (executes once)
    useEffect(() =>{
        // return () => {
        //  effect
        //};

    }, [])

    return <>
    <h1>{title}</h1>

    <h3>{count}</h3>

    <button onClick={()=>dispatch(increment(4))}>Click me to update global state</button>
    </>;
};


export default Hooks;