import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../Components/BlogCard";
import fetchBlogs from "../../Redux/thunk/blogs/fetchBlogs";

const Home = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((blog) => blog.blog.blogs);
    useEffect(() => {
        dispatch(fetchBlogs());
    }, []);
    return (
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">
                        Partem reprimique an pro
                    </h2>
                    <p className="font-serif text-sm dark:text-gray-400">
                        Qualisque erroribus usu at, duo te agam soluta mucius.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <BlogCard key={blog._id} blog={blog}></BlogCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;
