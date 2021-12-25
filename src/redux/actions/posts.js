import * as api from "../../api";
import { FETCH_ALL,FETCH_FEED_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/posts";
import { WARNING } from "../constants/message";

export const getFeedPosts = () => async (dispatch) => {
  try {
      const response = await api.fetchFeedPosts();

      if(response?.message) {
        const { message } = response
        dispatch({type: WARNING, payload: {message, time: new Date()}})
        return
      }
      dispatch({type: FETCH_FEED_ALL, payload: response.data});
  } catch (error) {
      console.log(error);
  }
}

export const getPosts = () => async (dispatch) => {
    try {
        const response  = await api.fetchPosts();

        if(response?.message) {
          const { message } = response
          dispatch({type: WARNING, payload: {message, time: new Date()}})
          return
        }

        dispatch({type: FETCH_ALL, payload: response.data});
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
      const response = await api.createPost(post);

      if(response?.message) {
        const { message } = response
        dispatch({type: WARNING, payload: {message, time: new Date()}})
        return
      }

      dispatch({ type: CREATE, payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
      const response = await api.updatePost(id, updatedPost);

      if(response?.message) {
        const { message } = response
        dispatch({type: WARNING, payload: {message, time: new Date()}})
        return
      }

      dispatch({ type: UPDATE, payload: response.data });
    } catch (error) {
      console.error(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
      const response = await api.deletePost(id);

      if(response?.message) {
        const { message } = response
        dispatch({type: WARNING, payload: {message, time: new Date()}})
        return
      }

      dispatch({type: DELETE, payload: response.data});
    } catch (error) {
      console.error(error);
    }
}

export const likePost = (id, updatedPost) => async (dispatch) => {
  try {
    const response = await api.likePost(id, updatedPost);

    if(response.message) {
      const { message } = response
      dispatch({type: WARNING, payload: {message, time: new Date()}})
      return
    }

    dispatch({type: LIKE, payload: response.data});
  } catch (error) {
    console.error(error);
  }
}