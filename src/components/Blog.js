import React, { useState } from "react";
import './Blog.css';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [inputText, setInputText] = useState('');
    const [selected, setSelected] = useState(new Date())

    const addBlog = () => {
        const trimmedText = document.getElementById('blog-text').value.trim();
        if (trimmedText !== '' && selected !== '') {
            const currentDate = selected.toISOString().split('T')[0];
            const existingBlogIndex = blogs.findIndex(blog => blog.date === selected);

            if (existingBlogIndex !== -1) {
                // Date already exists, add a new blog to the existing date
                setBlogs(prevBlogs => {
                    const updatedBlogs = [...prevBlogs];
                    updatedBlogs[existingBlogIndex].blogs.push({ text: trimmedText });
                    console.log(updatedBlogs)
                    return updatedBlogs;
                });
            } else {
                // Date doesn't exist, create a new entry for the date
                setBlogs(prevBlogs => [...prevBlogs, { date: currentDate, blogs: [{ text: trimmedText }] }]);
            }

            setInputText('');
            document.getElementById('blog-text').value = '';
            // Close the date picker
        }
    }


    const removeBlog = (dateIndex, blogIndex) => {
        setBlogs(prevBlogs => {
            const updatedBlogs = [...prevBlogs];
            const selectedDateBlogs = updatedBlogs[dateIndex].blogs;
    
            selectedDateBlogs.splice(blogIndex, 1);
    
            // If there are no blogs left for the selected date, remove the entire date entry
            if (selectedDateBlogs.length === 0) {
                updatedBlogs.splice(dateIndex, 1);
            }
    
            return updatedBlogs;
        });
    }

    return (
        <div id="blog">
            <h2>Blog</h2>
            <textarea id="blog-text">
            </textarea>
            <button onClick={addBlog}>Add Blog</button>
            <hr />
            <h2>Previous Blogs</h2>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
            />
                    {blogs.map((blog, index) => {
                        if (selected.toISOString().split('T')[0] === blog.date) {
                            return (
                                <div key={index}>
                                    <h3>{format(new Date(blog.date), 'EEEE, MMMM do yyyy')}</h3>
                                    <ul>
                                        {blog.blogs.map((blog, blogIndex) => {
                                            return (
                                                <li key={blogIndex}>
                                                    <p>{blog.text}</p>
                                                    <button onClick={() => removeBlog(index, blogIndex)}>Remove Blog</button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        }
                    })}
        </div>
    );
}

export default Blog;
