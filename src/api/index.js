const axios = require("axios");

// const url = 'http://localhost:5000/posts';
const API = axios.create({ baseURL : "http://localhost:5000"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).AccessToken}`;
    }
    return req;
})

export const fetchPosts = () => API.get("/posts").then(console.log("successfull request")).catch(error => console.log(error.response.data));
export const fetchFeedPosts = () => API.get("/posts/feedposts").then(console.log("successfull request")).catch(error => console.log(error.response.data));
export const createPost = (newPost) => API.post("/posts", newPost).then(console.log("successfull request")).catch(error => console.log(error.response.data));
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost).then(console.log("successfull request")).catch(error => console.log(error.response.data));
export const deletePost = (id) => API.delete(`/posts/${id}`).then(console.log("successfull request")).catch(error => console.log(error.response.data));
export const likePost = (id, updatedPost) => API.patch(`/posts/${id}/updatelikes`, updatedPost).then(console.log("successfull request")).catch(error => console.log(error.response.data));

export const signup = (formData) => API.post("/auth/signup", formData, {headers:{"Content-Type" : "application/json"}}).then(console.log("signup request successfull ")).catch(error => console.log(error.response.data));
export const login = (formData) => API.post("/auth/login", formData, {headers:{"Content-Type" : 'application/json'}}).then(console.log("login request successfull ")).catch(error => console.log(error.response.data));
export const refresh = (refreshToken) => API.post("/auth/refreshToken", { refreshToken }, {headers:{"Content-Type" : 'application/json'}}).then(console.log("refresh request successfull ")).catch(error => console.log(error.response.data));
export const confirmPassword = (password) => API.post("/auth/confirmpassword", { password }).then(console.log("confirm password request successfull ")).catch(error => console.log(error.response.data));
export const verifyToken = (id, token) => API.post("/auth/passwordtokenverify", { id, token }).then(console.log("token verification request successfull ")).catch(error => console.log(error.response.data));
