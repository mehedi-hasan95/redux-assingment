import { loadBlog } from "../../action/loadAction";

const fetchBlogs = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://redux-server-eosin.vercel.app/blogs");
        const data = await res.json();

        if (data.data.length) {
            dispatch(loadBlog(data.data));
        }
    };
};

export default fetchBlogs;
