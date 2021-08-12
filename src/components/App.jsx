import React, { useState, useEffect } from 'react';
import Posts from './Posts/Posts';
import { useDispatch } from "react-redux";
import { getFeedPosts, getPosts } from "../redux/actions/posts";
import Form from './Form/Form';
import Myposts from "./Posts/Myposts/Myposts"

export default function App({ feed }) {
    const [currentid, setcurrentid] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if(currentid === 0 && feed === true){
            dispatch(getFeedPosts());  // dont forget the parenthesis after getPosts !
        } else {
            dispatch(getPosts());
        }
    }, [dispatch, currentid, feed]);

    return (
        <>
        <div className="row main" style={{margin: "40px 20px"}}>
        {
            feed ? <Posts setcurrentid={setcurrentid} feed={feed}/> : <Myposts setcurrentid={setcurrentid} feed={feed}/>
        }
        <Form currentid={currentid} setcurrentid={setcurrentid} />
        </div>
        </>
    )
}