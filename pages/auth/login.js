import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from "react-icons/fc";
import { auth } from '../../utils/firebase'

export default function Login() {

  // Sign in using google provider
  const googleProvider = new GoogleAuthProvider();
  const LoginGoogle = async () => {
    try 
    {
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result)
    }
    catch(error){

    }
  }
  return (
    <div className='shadow-xl text-gray-800 rounded-lg mt-32 p-10'>
      <h1 className='text-3xl font-medium'>Join us today</h1>
      <div className='py-4'>
        <h2 className='py-4'>Sign in with one of the providers</h2>
      </div>
      <div className='flex flex-col gap-4'>
        <button onClick={LoginGoogle} className='text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-4'>
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
