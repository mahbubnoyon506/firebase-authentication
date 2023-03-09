import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center bg-gradient-to-t from-teal-700 to-slate-800 h-screen px-5'>

            <div className='flex justify-between items-center bg-slate-700 text-slate-50 p-5 rounded shadow-lg'>
                <div className='flex items-center'>
                    <h3 className='text-2xl md:text-4xl lg:text-6xl font-bold border-r-2 border-slate-50 pr-5'>404</h3>
                    <p className='px-5'>Opps!! The page you're looking for <br /> is not found.</p>
                </div>
                <Link to='/' className='py-2 px-5 rounded-full bg-teal-800 mt-2 cursor-pointer text-slate-50 hover:text-teal-800 hover:bg-slate-50 transition-all ease-in-out duration-500'>Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;