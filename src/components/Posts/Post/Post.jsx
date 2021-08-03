import React from 'react';
import moment from 'moment';
import Dropdown from './Dropdown';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../redux/actions/posts';

export default function Post({ post, setcurrentid }) {
    
    const changeCurrentid = () => {
        setcurrentid(post._id);
    }
    var content = null;

    if(post.content.length >= 25){
        content = post.content.substring(0,25) + "...Read More";
    } else {
        content = post.content;
    }
    
    const dispatch = useDispatch();

    // if(post.selectedFile === " "){
    //     document.querySelector(".creator").style.color = "black";
    // }

    return (
        <>
            {/* <div className="card" style={{width: "18rem"}}>
                
                    <img src={post.selectedFile} className="card-img-top" alt="..."/>
                    <Dropdown changeCurrentid={changeCurrentid}/>
                    <h4 className="card-title creator">By {post.creator}</h4>
                    <small className="createdOn">Created on {moment(post.createdAt).format('D/MM/YYYY, h:mm:ss a')}</small> 
                    {/* {
                        (post.selectedFile === " ") ? document.querySelector(".creator").style.color = "black": null
                    } */}
                
                {/* <div className="card-body">  {/* initially it was all 16px */}
                    {/* <div>
                        <h5 className="card-title">{post.name}</h5>
                        <div>
                            {(post.tags).map(tag => (
                                <small>{tag}</small>
                            ))}
                        </div>
                    </div>
                    <small className="card-text">{content}</small>
                    <div>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        {/* <div className="card-buttons">
                            <button className="btn btn-outline-secondary btn-sm" style={{marginRight: '1rem'}} onClick={() => dispatch(likePost(post._id, post))}><i class="far fa-thumbs-up"></i>Like <small>{post.likes}</small></button>
                            <button className="btn btn-danger btn-sm" onClick={() => dispatch(deletePost(post._id))}>Delete</button>
                        </div>
                    </div> */}
                {/* </div> */} 
            {/* </div> */} 
            <div className="card" style={{width: '18rem'}}>
                <div style={{height: 150, overflow: "hidden"}}>
                    <img src={post.selectedFile} className="card-img-top" alt="..."/>
                    <Dropdown changeCurrentid={changeCurrentid}/>
                    <h4 className="card-title creator">By {post.creatorName}</h4>
                    <small className="createdOn">Created on {moment(post.createdAt).format('D/MM/YYYY, h:mm:ss a')}</small>
                </div>
                <div className="card-body">
                <div className="title-tags">
                    <h5 className="card-title">{post.name}</h5>
                    <div>
                        {(post.tags).map(tag => (
                            <small>{tag}</small>
                        ))}
                    </div>
                </div>
                    <p className="card-text">{content}</p>
                    <div className="buttons">
                        <button className="btn btn-outline-secondary btn-sm" style={{marginRight: '1rem'}} onClick={() => dispatch(likePost(post._id, post))}><i class="far fa-thumbs-up"></i>Like <small>{post.likes}</small></button>
                        <button className="btn btn-danger btn-sm" onClick={() => dispatch(deletePost(post._id))}>Delete</button>
                    </div>
               </div>
            </div>

        </>
    )
}
