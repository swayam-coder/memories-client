const axios = require("axios");

// const url = 'http://localhost:5000/posts';
const API = axios.create({ baseURL : "http://localhost:5000"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).Accesstoken}`;
    }
    return req;
})

export const fetchPosts = () => API.get("/posts").then(console.log("successfull request")).catch(console.error());
export const createPost = (newPost) => API.post("/posts", newPost).then(console.log("successfull request")).catch(console.error());
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost).then(console.log("successfull request")).catch(console.error());
export const deletePost = (id) => API.delete(`/posts/${id}`).then(console.log("successfull request")).catch(console.error());
export const likePost = (id, updatedPost) => API.patch(`/posts/${id}/updatelikes`, updatedPost).then(console.log("successfull request")).catch(console.error());

export const signup = (formData) => API.post("/auth/signup", formData).then(console.log("signup successfull request")).catch(console.error());
export const login = (formData) => API.post("/auth/login", formData).then(console.log("login successfull request")).catch(console.error());