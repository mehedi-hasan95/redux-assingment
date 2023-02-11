import { removeBlog } from "../../action/loadAction";

const removeBlogsData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`, {
            method: "DELETE", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(removeBlog(id));
        }
    };
};

export default removeBlogsData;
