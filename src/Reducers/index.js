import { combineReducers } from "redux";

import {PostReducer} from "./PostReducer";
import {UserReducer} from "./UserReducer";
import {ImgReducer} from "./ImgReducer";
import {CommentReducer} from "./CommentReducer";

export default combineReducers({
    Posts: PostReducer,
    User: UserReducer,
    Imgs: ImgReducer,
    Comments: CommentReducer,
})