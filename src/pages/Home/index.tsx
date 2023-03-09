import React, { useState } from 'react';
import Login from '../../components/Login';
import ResetPass from '../../components/ResetPass';
import SignUp from '../../components/SignUp';


const Home = () => {
    const [open, setOpen] = useState<boolean>(false)

    const [clickItem, setClickItem] = useState<string>('login')

    let content

    if (clickItem === 'login') {
        content = <Login open={open} setOpen={setOpen} />

    } else if (clickItem === 'signup') {
        content = <SignUp />
    }

    return (
        <div className='relative bg-gradient-to-t from-teal-700 to-slate-800 h-screen'>
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-gray-800 md:2/3 min-h-[300px]  md:min-h-[340px] lg:min-h-[420px] lg:w-1/3  p-5 md:p-8 lg:p-16 rounded shadow-lg'>
                    <ul className='flex justify-around '>
                        <li className={`pb-2 transition-all ease-in-out duration-500 text-xl font-semibold text-slate-50 border-b-2 hover:border-teal-800 ${clickItem === 'login' ? 'border-teal-800' : 'border-slate-50'}`} onClick={() => setClickItem('login')}>Login</li>
                        <li className={`pb-2 transition-all ease-in-out duration-500 text-xl font-semibold text-slate-50 border-b-2 hover:border-teal-800 ${clickItem === 'signup' ? 'border-teal-800' : 'border-slate-50'}`} onClick={() => setClickItem('signup')}>Sign Up</li>
                    </ul>
                    {
                        content
                    }
                </div>
            </div>
           <ResetPass open={open} setOpen={setOpen} />
        </div>
    );
};

export default Home;