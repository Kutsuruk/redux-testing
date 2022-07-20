export const postsActionTypes = {
    SET_POSTS: 'POSTS.SET_POSTS',
    CLEAR_POSTS: 'POSTS.CLEAR_POSTS',
    SET_LOADING: 'POSTS.SET_LOADING',
}

export const postsActions = {
    setPosts: (payload) => ({type: postsActionTypes.SET_POSTS, payload: payload}),
    clearPosts: (payload) => ({type: postsActionTypes.CLEAR_POSTS, payload: payload}),
    setLoading: (payload) => ({type: postsActionTypes.SET_LOADING, payload: payload}),

    fetchPosts: () => async (dispatch) => {
        dispatch(postsActions.setLoading(true));

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
            const posts = await response.json();

            dispatch(postsActions.setPosts(posts));
        } catch(error) {
            console.log(error.message);
        } finally {
            dispatch(postsActions.setLoading(false));
        }
    }
}