export const CommentReducer = (state =[], action) => {
    switch(action.type) {
        case 'FETCH_COMMENTS':
            return [...state, action.payload];
        default:
            return state;
    }
}