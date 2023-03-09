import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import auth from '../firebase.init';
import { SignupValue } from '../shared/Types';

const SignUp = () => {
    const [showPass, setShowPass] = useState<boolean>(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm<SignupValue>();

    const onSubmit = async (data: SignupValue) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({
            displayName: data.username,
        })
        reset()
        if (loading) {
            toast.loading('Loading...')
        } else if (error) {
            toast.error(error.message)
        } else {
            toast.success('Successfully account created!')
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
                    <input
                        className='bg-transparent text-lg p-2 border-b border-slate-50 border-0 focus:outline-none text-slate-50 w-full'
                        type='text'
                        placeholder='Username'
                        {...register("username", { required: "User name is required" })}
                    />
                    {errors.email && <p className='text-sm text-rose-600 mt-1' role="alert">{errors.username?.message}</p>}
                </div>
                <div className='mb-2'>
                    <div className='flex items-end'>
                        <input
                            className='bg-transparent text-lg p-2 border-b border-slate-50 border-0 focus:outline-none text-slate-50 w-full'
                            type={`${showPass ? 'text' : 'password'}`}
                            placeholder='Password'
                            {...register("password", { required: "Password is required", minLength: 8, maxLength: 20 })}
                        />
                        <button className='text-slate-50 border-b border-slate-50 pb-2' onClick={() => setShowPass(!showPass)}>
                            {
                                showPass ? <FaEyeSlash size={25} /> : <FaEye size={25} />
                            }
                        </button>
                    </div>
                    {errors.password && (
                        <p className='text-sm text-rose-600 mt-1' role="alert">
                            {errors.password?.message}
                            {errors.password.type === 'minLength' && 'Password need at least 8 characters.'}
                            {errors.password.type === 'maxLength' && 'Password no more than 20 characters'}
                        </p>
                    )}
                </div>
                <input className='py-1 px-8 rounded-full bg-teal-800 mt-2 cursor-pointer text-slate-50 hover:text-teal-800 hover:bg-slate-50 transition-all ease-in-out duration-500' type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default SignUp;