import createDataContext from './createDataContext';

const blogReducer = (state , action) => {
    switch(action.type){
        case 'add_blogPost' : {
            return [...state , {id : Math.floor(Math.random()*99999) , title : action.payload.title , content : action.payload.content}]
        }
        case 'delete_blogPost' : {
            console.log(action.payload);
            return state.filter((blogPost) => blogPost.id !== action.payload);
        }
        case 'edit_blogPost' : {
            return state.map((blogPost) => {
                if(blogPost.id === action.payload.id){
                    return action.payload;
                } else {
                    return blogPost;
                }
            })
        }
        default:
            return state;
    }

};

const addBlogPost = dispatch => {
    return (title , content) => {
        dispatch({type : 'add_blogPost' , payload : {title , content}});
    };
}
const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type : 'delete_blogPost' , payload : id})
    }
}

const editBlogPost = dispatch => {
    return (id , title , content) => {
        dispatch({type : 'edit_blogPost' , payload : {id , title , content}})
    }
}

export const {Context , Provider} = createDataContext(
    blogReducer,
    {addBlogPost , deleteBlogPost , editBlogPost},
    [{title : 'Test Post' , content : 'Test Content ' , id : 1}]
)



