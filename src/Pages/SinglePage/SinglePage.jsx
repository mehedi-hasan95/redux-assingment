import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import removeBlogsData from "../../Redux/thunk/blogs/removeBlogsData";
import updateBlogsData from "../../Redux/thunk/blogs/updateBlogsData";

const SinglePage = () => {
    const navigate = useNavigate();
    const blogs = useLoaderData();
    const { _id, img, title, desc, cat } = blogs;
    //Redux
    const dispatch = useDispatch();

    // Update Post
    const [updateMode, setUpdateMode] = useState(false);

    const [updateTitle, setUpdateTitle] = useState(title);
    const [updateDesc, setUpdateDesc] = useState(desc);

    const data = {
        title: updateTitle,
        desc: updateDesc,
    };

    return (
        <div className="container mx-auto mb-10">
            <img src={img} alt="" />
            <div className="flex gap-5 text-2xl pt-5">
                <BiEdit
                    onClick={() => setUpdateMode(true)}
                    className="cursor-pointer"
                />
                <AiFillDelete
                    className="cursor-pointer"
                    onClick={() =>
                        dispatch(removeBlogsData(_id), navigate("/"))
                    }
                />
            </div>
            {updateMode ? (
                <input
                    onChange={(e) => setUpdateTitle(e.target.value)}
                    type="text"
                    id=""
                    defaultValue={title}
                    className="w-full border text-center p-2 outline-none border-violet-400 rounded-md"
                />
            ) : (
                <h2 className="text-2xl">{title}</h2>
            )}
            <h3 className="py-4">
                {cat?.map((categories, index) => (
                    <Link
                        to=""
                        key={index}
                        className="bg-gray-500 px-3 py-2 mr-5 text-white font-bold"
                    >
                        {categories.cat}
                    </Link>
                ))}
            </h3>
            {updateMode ? (
                <textarea
                    onChange={(e) => setUpdateDesc(e.target.value)}
                    defaultValue={desc}
                    name="desc"
                    id="desc"
                    cols="30"
                    rows="10"
                    className="border border-purple-700 px-3 py-2 w-full"
                ></textarea>
            ) : (
                <p className="pb-10">{desc}</p>
            )}

            {updateMode && (
                <>
                    <button
                        onClick={() => setUpdateMode(false)}
                        className="bg-purple-400 px-4 py-2 rounded-md mr-5"
                    >
                        Close
                    </button>
                    <button
                        onClick={() =>
                            dispatch(updateBlogsData(_id, data), navigate(`/`))
                        }
                        className="bg-purple-400 px-4 py-2 rounded-md"
                    >
                        Update
                    </button>
                </>
            )}
        </div>
    );
};

export default SinglePage;
