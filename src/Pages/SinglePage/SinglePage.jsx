import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import removeBlogsData from "../../Redux/thunk/blogs/removeBlogsData";

const SinglePage = () => {
    const blogs = useLoaderData();
    const { _id, img, title, desc, cat } = blogs;
    const dispatch = useDispatch();
    return (
        <div className="container mx-auto">
            <img src={img} alt="" />
            <div className="flex gap-5 text-2xl pt-5">
                <BiEdit className="cursor-pointer" />
                <AiFillDelete
                    className="cursor-pointer"
                    onClick={() => dispatch(removeBlogsData(_id))}
                />
            </div>
            <h2 className="text-2xl">{title}</h2>
            <h3 className="py-4">
                {cat?.map((c) => (
                    <Link
                        to=""
                        key={c._id}
                        className="bg-gray-500 px-3 py-2 mr-5 text-white font-bold"
                    >
                        {c.cat}
                    </Link>
                ))}
            </h3>
            <p>{desc}</p>
        </div>
    );
};

export default SinglePage;
