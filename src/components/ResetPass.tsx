import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { MdOutlineCancel } from 'react-icons/md';
import auth from '../firebase.init';
import { ResetValue, StateType } from '../shared/Types';


const ResetPass = ({ open, setOpen }: StateType) => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm<ResetValue>();
    const onSubmit = async (data: ResetValue) => {
        sendPasswordResetEmail(data.email)
        reset()
        if(sending){
            toast.loading('Loading...')
        }else if(error){
            toast.error(error.message)
        }else{
            toast.success('A password reset email sent.')
        }
    };

    return (
        <div>
            <div className={`flex justify-center items-center`}>
                <div className={`absolute bg-slate-50 md:w-2/3 lg:w-1/3 min-h-[260px] md:min-h-[300px] lg:min-h-[380px] p-5 rounded shadow-lg transition-all ease-in-out duration-500 ${open ? 'top-40' : 'top-[-500px]'}`}>
                    <div className='flex justify-end '>
                        <MdOutlineCancel className='cursor-pointer' onClick={() => setOpen(!open)} size={30} />
                    </div>
                    <div className='pt-5'>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-semibold'>Reset Password</h2>
                        <p className='py-5'>Forgot your password? Enter your password below, and we will email instrustions for setting a new one.</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-2'>
                                <input
                                    className='bg-transparent text-lg p-2 border-b border-slate-900 focus:outline-none text-slate-900 w-full'
                                    type='email'
                                    placeholder='Email'
                                    {...register("email", { required: "Email Address is required" })}
                                />
                                {errors.email && <p className='text-sm text-rose-600 mt-1' role="alert">{errors.email?.message}</p>}
                            </div>
                            <input className='py-1 px-8 rounded-full bg-teal-800 mt-2 cursor-pointer text-slate-50 hover:text-slate-50 hover:bg-slate-900 transition-all ease-in-out duration-500' type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPass;