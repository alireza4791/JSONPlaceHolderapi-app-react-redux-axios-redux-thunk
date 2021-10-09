import JSONPlaceHolder from '../apis/JSONPlaceHolder';
import _ from 'lodash';

export const FetchPosts = () => async dispatch => {
    const response = await JSONPlaceHolder.get('./posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

export const FetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await JSONPlaceHolder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
})

export const FetchImg = id => dispatch => _fetchImg(id, dispatch);

const _fetchImg = _.memoize(async (id, dispatch) => {
    const response = await JSONPlaceHolder.get(`/photos/${id}`)

    dispatch({
        type: 'FETCH_Img',
        payload: response.data
    })
})

export const FetchComments = id => dispatch => _fetchComments(id, dispatch);

const _fetchComments = _.memoize(async (id, dispatch) => {
    const response = await JSONPlaceHolder.get(`/comments/${id}`)

    dispatch({
        type: 'FETCH_COMMENTS',
        payload: response.data
    })
})

