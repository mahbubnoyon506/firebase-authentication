import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='flex justify-center items-center bg-gradient-to-t from-teal-700 to-slate-800 h-screen'>
            <Outlet />
        </div>
    );
};

export default Main;