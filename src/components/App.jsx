import React, { useState, useEffect } from 'react';
import Posts from './Posts/Posts';
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/posts";
import Form from './Form/Form';

export default function App() {
    const [currentid, setcurrentid] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if(currentid === 0){
            dispatch(getPosts());  // dont forget the parenthesis after getPosts !
        }
    }, [dispatch, currentid]);

    return (
        <>
        <div className="row main" style={{margin: "50px 20px"}}>
            <Posts setcurrentid={setcurrentid}/>
            <Form currentid={currentid} setcurrentid={setcurrentid}/>
        </div>
        </>
    )
}