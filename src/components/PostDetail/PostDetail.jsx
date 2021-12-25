import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function PostDetail() {
    const path = (window.location.pathname).split("/");
    const posts = useSelector(state => state.posts);
    const [detailPost, setDetailPost] = useState(null)

    if(path && posts.length !== 0){
        console.log("entered");
        const c = posts.find((p) => {
            return p._id === path[2]
        })
        setDetailPost(c)
        console.log(detailPost);
    }
    
    return (
        detailPost &&
            <div className="profile">
            <div className="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Benchod</h5>
                            <p class="card-text">hahsha</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
