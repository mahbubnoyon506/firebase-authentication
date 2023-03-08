import React from 'react';
import { useForm } from 'react-hook-form';

type FormValue = {
    username: string,
    email: string,
    password: string
}

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<FormValue>();
    const onSubmit = (data: FormValue) => console.log(data);
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
                        type='text'
                        placeholder='Username'
                        {...register("username", { required: "User name is required" })}
                    />
                    {errors.email && <p role="alert">{errors.username?.message}</p>}
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
                <input className='py-1 px-8 rounded-full bg-teal-800 mt-2 cursor-pointer text-slate-50 hover:text-teal-800 hover:bg-slate-50 transition-all ease-in-out duration-500' type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default SignUp;