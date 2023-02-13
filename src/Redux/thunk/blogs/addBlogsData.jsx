import { addBlog } from "../../action/loadAction";

const addBlogsData = (blog) => {
    return async (dispatch, getState) => {
        const res = await fetch("https://redux-server-eosin.vercel.app/blog", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        });
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(
                addBlog({
                    _id: data.insertedId,
                    ...blog,
                })
            );
        }
    };
};

export default addBlogsData;
