import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import addBlogsData from "../../Redux/thunk/blogs/addBlogsData";

const Write = () => {
    const dispatch = useDispatch();
    const [inputCats, setInputCats] = useState([{ cat: "" }]);
    const addCats = (index, event) => {
        const values = [...inputCats];
        values[index][event.target.name] = event.target.value;
        setInputCats(values);
    };

    // Add new cat fields
    const addCatFilds = () => {
        setInputCats([...inputCats, { cat: "" }]);
    };
    // Remove cat fields
    const removeCatFilds = (index) => {
        const values = [...inputCats];
        values.splice(index, 1);
        setInputCats(values);
    };

    // on submit handaler
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const desc = form.desc.value;
        const image = form.files.files[0];

        const imageBB = "d1445eeabe3574dc24041179a4e9edef";
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageBB}`;

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    const data = {
                        title,
                        desc,
                        cat: inputCats,
                        img: result.data.url,
                    };
                    dispatch(addBlogsData(data));
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <div className="container mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="w-full space-y-1">
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="border border-purple-700 px-3 py-2 w-full"
                    />
                </div>
                <div className="w-full space-y-1 flex flex-wrap">
                    {inputCats.map((event, index) => (
                        <div key={index}>
                            <label
                                htmlFor="cat"
                                className="block text-sm font-medium"
                            >
                                Category
                            </label>
                            <div className="flex items-center gap-5 mr-5">
                                <input
                                    type="text"
                                    name="cat"
                                    id="cat"
                                    className="border border-purple-700 px-3 py-2 w-full"
                                    onChange={(event) => addCats(index, event)}
                                />
                                {inputCats.length === 1 ? (
                                    ""
                                ) : (
                                    <AiOutlineMinus
                                        onClick={() => removeCatFilds(index)}
                                        className="text-2xl cursor-pointer"
                                    />
                                )}
                                <AiOutlinePlus
                                    onClick={addCatFilds}
                                    className="text-2xl cursor-pointer"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full space-y-1">
                    <label htmlFor="desc" className="block text-sm font-medium">
                        Description
                    </label>
                    <textarea
                        name="desc"
                        id="desc"
                        cols="30"
                        rows="10"
                        className="border border-purple-700 px-3 py-2 w-full"
                    ></textarea>
                </div>
                <fieldset className="w-full space-y-1 dark:text-gray-100">
                    <label
                        htmlFor="files"
                        className="block text-sm font-medium"
                    >
                        Attachments
                    </label>
                    <div className="flex">
                        <input
                            type="file"
                            name="files"
                            id="files"
                            className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                        />
                    </div>
                </fieldset>
                <input
                    type="submit"
                    value="Submit"
                    className=" cursor-pointer bg-purple-500 px-5 py-3 mt-5 font-bold text-white"
                />
            </form>
        </div>
    );
};

export default Write;
