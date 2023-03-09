import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import toast from 'react-hot-toast';
import { LoginValue, StateType } from '../shared/Types';

const Login = ({ open, setOpen }: StateType) => {
    const [showPass, setShowPass] = useState<boolean>(false);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm<LoginValue>();
    const onSubmit = async (data: LoginValue) => {
        await signInWithEmailAndPassword(data.email, data.password);
        reset()
        if (loading) {
            toast.loading('Loading...')
        }else if (error) {
            toast.error(error.message)
        }else{
            toast.success('Successfully Logged In!')
        }
    };
    
    return (
        <div className='my-2 md:my-4 lg:my-6'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-2'>
                    <input
                        className='bg-transparent text-lg p-2 border-b border-slate-50 focus:outline-none text-slate-50 w-full'
                        type='email'
                        placeholder='Email'
                        {...register("email", { required: "Email Address is required" })}
                    />
                    {errors.email && <p className='text-sm text-rose-600 mt-1' role="alert">{errors.email?.message}</p>}
                </div>
                <div className='mb-2'>
                    <div className='flex items-end'>
                        <input
                            className='bg-transparent text-lg p-2 border-b border-slate-50 border-0 focus:outline-none text-slate-50 w-full'
                            type={`${showPass ? 'text' : 'password'}`}
                            placeholder='Password'
                            {...register("password", { required: "Password is required" })}
                        />
                        <button className='text-slate-50 border-b border-slate-50 pb-2' onClick={() => setShowPass(!showPass)}>
                            {
                                showPass ? <FaEyeSlash size={25} /> : <FaEye size={25} />
                            }
                        </button>
                    </div>
                    {errors.password && <p className='text-sm text-rose-600 mt-1' role="alert">{errors.password?.message}</p>}
                </div>
                <input className='py-1 px-8 rounded-full bg-teal-800 mt-2 cursor-pointer text-slate-50 hover:text-teal-800 hover:bg-slate-50 transition-all ease-in-out duration-500' type="submit" value="Login" />
            </form>
            <p onClick={() => setOpen(!open)} className='text-slate-50 mt-1 underline cursor-pointer'>Forgot your password?</p>
        </div>
    );
};

export default Login;