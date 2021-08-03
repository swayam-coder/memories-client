import React from 'react';
import { useSelector } from "react-redux";
import Post from './Post/Post';
import { CircularProgress } from '@material-ui/core';

export default function Posts({ setcurrentid }) {
    const posts = useSelector(state => state.posts);
    console.log(posts);
    return (
        <>
        <div className="col-md-9">
            <div className="row">
            {posts.map((post) => (
                <div className="col-sm-4">
                    <Post post={post} setcurrentid={setcurrentid}/>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}
