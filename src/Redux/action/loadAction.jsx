import { ADD_BLOG, LOAD_BLOG, REMOVE_BLOG } from "../actionTypes/actionTypes";

export const loadBlog = (data) => {
    return {
        type: LOAD_BLOG,
        payload: data,
    };
};

export const addBlog = (data) => {
    return {
        type: ADD_BLOG,
        payload: data,
    };
};

export const removeBlog = (data) => {
    return {
        type: REMOVE_BLOG,
        payload: data,
    };
};
