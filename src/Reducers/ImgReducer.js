export const ImgReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_Img':
            return [...state, action.payload];
        default:
            return state;
    }
}

