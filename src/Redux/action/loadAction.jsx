import { LOAD_BLOG } from "../actionTypes/actionTypes";

export const loadBlog = (data) => {
    return {
        type: LOAD_BLOG,
        payload: data,
    };
};
