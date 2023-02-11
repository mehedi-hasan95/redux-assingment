import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    console.log(blog);
    const { img, _id, title, desc, cat } = blog;
    console.log(cat);
    return (
        <article className="flex flex-col dark:bg-gray-900 bg-gray-300">
            <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={img}
            />
            <div className="flex flex-col flex-1 p-6">
                <Link
                    rel="noopener noreferrer"
                    to="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                >
                    Convenire
                </Link>
                <Link
                    to={`/blog/${_id}`}
                    className="flex-1 py-2 text-lg font-semibold leading-snug"
                >
                    {title}
                </Link>
            </div>
        </article>
    );
};

export default BlogCard;
