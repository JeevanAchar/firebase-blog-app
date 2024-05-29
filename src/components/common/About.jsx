import React from 'react'

const About = () => {
    return (
        <div className='w-full h-full'>
            <div className='md:w-3/5 mx-auto px-5'>
                <h2 className='text-5xl font-semibold text-gray-800 font-mono my-4 text-center mb-6'>About us</h2>
                <div className='md:max-w-[700px]'>
                    <p className='text-3xl text-gray-600 font-medium my-4'>Welcome to BlogApp!</p>
                    <p className='text-gray-500 font-semibold'>"At BlogApp, we believe in the power of stories and the impact of sharing knowledge. Our mission is to provide a vibrant platform where writers, thinkers, and enthusiasts from all walks of life can share their insights, experiences, and ideas with a global audience."</p>
                </div>
                <div className='my-6 flex flex-col items-end'>
                    <div className='md:max-w-[700px]'>
                        <h3 className='text-3xl font-semibold text-gray-600 my-2'>Our Purpose</h3>
                        <p className='text-gray-500 font-semibold'>Blog was born out of a desire to create a space where diverse voices can be heard, and quality content can thrive. Whether you are a professional blogger, a hobbyist, or someone looking to start your writing journey, BlogSphere is the perfect place for you to publish your work and connect with a community of like-minded individuals.</p>
                    </div>
                </div>
                <div className="my-4 md:max-w-[700px]">
                    <h3 className='text-3xl font-semibold text-gray-600 my-2'>Our Mission and Vision</h3>
                    <p className='text-gray-500 font-semibold'><span className='text-black text-xl'>Mission:</span> To empower individuals to share their stories and ideas effortlessly and to foster a community where knowledge and creativity can flourish.</p>
                    <p className='text-gray-500 font-semibold'><span className='text-black text-xl'>Vision:</span> To become the leading global blogging platform that revolutionizes how people create, consume, and connect through written content.</p>
                </div>
                <div className='my-6 flex flex-col items-end'>
                    <div className="md:max-w-[700px] px-7">
                        <h3 className='text-3xl font-semibold text-gray-600 my-2'>Our Core Values</h3>
                        <ol className='list-disc'>
                            <li className='text-gray-500 font-semibold'><span className='text-black font-semibold'>Creativity :</span> Encouraging innovative and original content.</li>
                            <li className='text-gray-500 font-semibold'><span className='text-black font-semibold'>Community :</span> Building a supportive and engaging environment for bloggers and readers.</li>
                            <li className='text-gray-500 font-semibold'><span className='text-black font-semibold'>Quality :</span> Upholding high standards for content creation and user experience.</li>
                            <li className='text-gray-500 font-semibold'><span className='text-black font-semibold'>Inclusivity :</span> Ensuring diverse voices and perspectives are represented and respected.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;