import { updateBlog } from "../../action/loadAction";

const updateBlogsData = (id, blog) => {
    return async (dispatch, getState) => {
        const res = await fetch(
            `https://redux-server-eosin.vercel.app/blog/${id}`,
            {
                method: "PUT", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(blog),
            }
        );
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(updateBlog(id));
        }
    };
};

export default updateBlogsData;
