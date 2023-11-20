import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Blog.css';

const Blog = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [blogs, setBlogs] = useState([]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleAddBlog = (title, content) => {
    if (!selectedDate) {
      alert('Please select a date for the blog post.');
      return;
    }

    const newBlog = {
      date: selectedDate,
      title: title,
      content: content,
    };
    document.getElementById('blogTitle').value = '';
    document.getElementById('blogContent').value = '';
    setBlogs([...blogs, newBlog]);

  };

  return (
    <div>
      <div>
        <h2>Select Date</h2>
        <DayPicker selected={selectedDate} onDayClick={handleDateClick} />
      </div>
      <div>
        <h2>Add Blog Post</h2>
        <input type="text" placeholder="Blog Title" id="blogTitle" />
        <textarea placeholder="Blog Content" id="blogContent" />
        <button
          onClick={() => {
            const title = document.getElementById('blogTitle').value;
            const content = document.getElementById('blogContent').value;
            handleAddBlog(title, content);
          }}
        >
          Add Blog
        </button>
      </div>
      <div>
        <h2>Blogs</h2>
        {blogs.map((blog, index) => (
          <div className="all-blogs" key={index} style={{ display: blog.date.getTime() === selectedDate?.getTime() ? 'block' : 'none' }}>
            <h3>{blog.title}</h3>
            <p>Date: {blog.date.toLocaleDateString()}</p>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
