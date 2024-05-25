import React, { useState } from 'react';

const CreateBlog = () => {

  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    author: ""
  });

  const handleChange = (e) => {
    const input = { [e.target.name]: e.target.value }
    setBlogData({ ...blogData, ...input })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      console.log({ ...blogData });
      setBlogData({
        title: "",
        content: "",
        author: ""
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full h-full max-w-[650px] mx-auto'>
      <div>
        <div className="flex flex-col items-center">
          <h2 className='sm:text-6xl text-5xl text-gray-600 font-semibold py-4'>Create blog</h2>
        </div>
        <form className='max-w-[400px] my-5 items-start mx-auto' onSubmit={handleSubmit}>
          <div className='flex flex-col w-full my-2'>
            <label htmlFor="title" className='text-gray-500 font-semibold text-lg cursor-pointer'>Blog title:</label>
            <input type="text" id='title' name='title' placeholder='title' className='px-3 py-1 outline-none border-[1px] border-gray-500 my-1 rounded'
              value={blogData.title} onChange={(e) => { handleChange(e) }}
            />
          </div>
          <div className='flex flex-col w-full my-2'>
            <label htmlFor="content" className='text-gray-500 font-semibold text-lg cursor-pointer'>Content:</label>
            <textarea type="text" id='content' name='content' placeholder='content' className='px-2 py-1 outline-none border-[1px] border-gray-500 my-1 rounded'
              cols={30} rows={5} value={blogData.content} onChange={(e) => { handleChange(e) }}
            />
          </div>
          <div className='flex flex-col w-full my-2'>
            <label htmlFor="author" className='text-gray-500 font-semibold text-lg cursor-pointer'>Author:</label>
            <input type="text" id='author' name='author' placeholder='author' className='px-3 py-1 outline-none border-[1px] border-gray-500 my-1 rounded'
              value={blogData.author} onChange={(e) => { handleChange(e) }}
            />
          </div>
          <button className="bg-blue-700 px-10 py-1 text-white font-medium rounded-md hover:bg-blue-600" type='submit'  >add</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlog