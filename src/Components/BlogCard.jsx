import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const { img, _id, title, desc, cat } = blog;
    return (
        <article className="flex flex-col dark:bg-gray-900 bg-gray-300">
            <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={img}
            />
            <div className="flex flex-col flex-1 p-6">
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
