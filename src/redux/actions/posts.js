import * as api from "../../api";
import { FETCH_ALL,FETCH_FEED_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/posts";

export const getFeedPosts = () => async (dispatch) => {
  try {
      const { data } = await api.fetchFeedPosts();
      console.log(data);

      if(data.message) {
        // const { message } = data
        // dispatch({type: "AUTH-WARNING", message})
        console.log(data.message);
      }
      dispatch({type: FETCH_FEED_ALL, payload: data});
  } catch (error) {
      console.log(error);
  }
}

export const getPosts = () => async (dispatch) => {
    try {
        const { data }  = await api.fetchPosts();
        console.log(data);

        if(data.message) {
          // const { message } = data
          // dispatch({type: "AUTH-WARNING", message})
          console.log(data.message);
        }
        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, updatedPost);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.error(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.deletePost(id);
      dispatch({type: DELETE, payload: data});
    } catch (error) {
      console.error(error);
    }
}

export const likePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id, updatedPost);
    dispatch({type: LIKE, payload: data});
  } catch (error) {
    console.error(error);
  }
}