import { AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className='shadow-xl text-gray-800 rounded-lg mt-32 p-10'>
      <h1 className='text-3xl font-medium'>Join us today</h1>
      <div className='py-4'>
        <h2 className='py-4'>Sign in with one of the providers</h2>
      </div>
      <div className='flex flex-col gap-4'>
        <button className='text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-4'>
        <FcGoogle className='text-2xl' />
            Sign in with Google
        </button>
        <button className='text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-4'>
           <AiFillFacebook className='text-2xl text-blue-700' />
            Sign in with Facebook
        </button>
      </div>
    </div>
  );
}