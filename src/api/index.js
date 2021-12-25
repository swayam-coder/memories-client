import axios from "axios";
// const baseURL = "http://localhost:5000"

const baseURL = "https://memories-server-swayam.herokuapp.com"

console.log(baseURL);

const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).AccessToken}`;
    }
    return req;
})

export const fetchPosts = () => API.get("/posts/api").then(console.log("successfull request")).catch(error => console.log(error.response.data));
export const fetchFeedPosts = () => API.get("/posts/api/feedposts").then(console.log("successfull request")).catch(error => console.log(error.response.data));
export const createPost = (newPost) => API.post("/posts/api", newPost).then(console.log("successfull request")).catch(error => console.log(error.response.data));
export const updatePost = (id, updatedPost) => API.patch(`/posts/api/${id}`, updatedPost).then(console.log("successfull request")).catch(error => console.log(error.response.data));
export const deletePost = (id) => API.delete(`/posts/api/${id}`).then(console.log("successfull request")).catch(error => console.log(error.response.data));
export const likePost = (id, updatedPost) => API.patch(`/posts/api/${id}/updatelikes`, updatedPost).then(console.log("successfull request")).catch(error => console.log(error.response.data));

export const signup = (formData) => API.post("/auth/api/signup", formData, {headers:{"Content-Type" : "application/json"}}).then(console.log("signup request successfull ")).catch(error => {return error.response.data});
export const login = (formData) => API.post("/auth/api/login", formData, {headers:{"Content-Type" : 'application/json'}}).then(console.log("login request successfull ")).catch(error => {return error.response.data});
export const refresh = (refreshToken) => API.post("/auth/api/refreshToken", { refreshToken }, {headers:{"Content-Type" : 'application/json'}}).then(console.log("refresh request successfull ")).catch((error) => {return error.response.data});
export const confirmPassword = (password) => API.post("/auth/api/confirmpassword", { password }).then(console.log("confirm password request successfull ")).catch(error => { return error.response.data });
export const verifyToken = (id, token) => API.post("/auth/api/passwordtokenverify", { id, token }).then(console.log("token verification request successfull ")).catch(error => { return error.response.data });
