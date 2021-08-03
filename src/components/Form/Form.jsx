import React, { useState, useEffect } from 'react';
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../redux/actions/posts";
import Paper from '@material-ui/core/Paper';
import { useStyles } from "./styles";

export default function Form({currentid, setcurrentid}) {
    const [postData, setPostData] = useState({creatorName: ' ', name: ' ', tags: [ ], content: ' ', selectedFile: ' '});
    const modifiedpost = useSelector(state => currentid ? state.posts.find((p) => p._id === currentid): null)

    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if(modifiedpost && currentid) {
            setPostData(modifiedpost)
        }
    }, [modifiedpost, currentid]);
    
    const clearForm = () => {
        setcurrentid(0);
        setPostData({creatorName: ' ', name: ' ', tags: [ ], content: ' ', selectedFile: ' '})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentid){
            dispatch(updatePost(currentid, postData));
            clearForm();
        } else {
            dispatch(createPost(postData));
            clearForm();
        }
    }

    return (
        <div className="col-md-3">
        <Paper elevation={3} className={classes.root}>
        <h4 style={{textAlign: "center"}}>Create a Memory</h4>
        <form onSubmit={handleSubmit} className="inputForm">
            <div className="mb-3">
                <label className="form-label">Creator</label>
                <input type="text" className="form-control" value={postData.creatorName} onChange={(e) => setPostData({...postData, creatorName: e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" value={postData.name} onChange={(e) => setPostData({...postData, name: e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea type="text" className="form-control" value={postData.content} onChange={(e) => setPostData({...postData, content: e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Tags</label>
                <input type="text" className="form-control" value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(",")})}/>
            </div>
            <div style={{margin: "10px 0 15px 0"}}>
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64})=>setPostData({...postData, selectedFile: base64})}
                />
            </div>

            {/*<div class="mb-3">  
                <label for="formFileSm" class="form-label">Small file input example</label>
                <input class="form-control form-control-sm" id="formFileSm" type="file">
                <div> */}  

            {/* can we use the above commented code instead of FileBase */}

            <button type="submit" class="btn btn-dark">{currentid ? "Edit": "Add"} Memory</button>
            <button type="button" class="btn btn-warning" style={{marginLeft: 10}} onClick={clearForm}>Clear</button>
        </form> 
        </Paper>
        </div>
    )
}
