const postsDetails = (posts = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...posts, action.payload];
        case "DELETE":
            return posts.filter((p) => {return p._id !== action.payload._id})   //what filter does is it finds the element as per the condition and deletes the rest
        case "UPDATE":
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));  // what does this statement do?
        case "LIKE": 
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post)); 
        default:
            return posts;
    }
}

export default postsDetails;