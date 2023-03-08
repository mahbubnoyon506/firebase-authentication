import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';

type FormValue = {
    email: string,
    password: string
}



const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm<FormValue>();
    const onSubmit = async (data: FormValue) => {
        await signInWithEmailAndPassword(data.email, data.password)
    };
    if (user) {
           console.log('user created')
      }
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
                    {errors.email && <p role="alert">{errors.email?.message}</p>}
                </div>
                <div className='mb-2'>
                    <input
                        className='bg-transparent text-lg p-2 border-b border-slate-50 border-0 focus:outline-none text-slate-50 w-full'
                        type='password'
                        placeholder='Password'
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <p role="alert">{errors.password?.message}</p>}
                </div>
                <input className='py-1 px-8 rounded-full bg-teal-800 mt-2 cursor-pointer text-slate-50 hover:text-teal-800 hover:bg-slate-50 transition-all ease-in-out duration-500' type="submit" value="Login" />
            </form>
            <p className='text-slate-50 mt-1 underline cursor-pointer'>Forgot your password?</p>
        </div>
    );
};

export default Login;