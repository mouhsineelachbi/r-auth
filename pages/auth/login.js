import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../utils/firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  // Sign in using google provider
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const [user, loading] = useAuthState(auth)
  const LoginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      router.push("/dashboard");
      console.log(result);
    } catch (error) {}
  };

  // Sign in using facebook provider
  const fbAuthProvider = new FacebookAuthProvider()
  const loginFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, fbAuthProvider)
      const credentials = await fbAuthProvider.credentialFromResult(result)
      const token = credentials.accessToken;
      let photoUrl = result.user.photoURL + '&height=500&access_token=' + token
      await updateProfile(auth.currentUser, {photoUrl: photoUrl})
      console.log(result)
      router.push('/dashoard')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div className="flex justify-center flex-row align-middle items-center">
    <div className="shadow-xl text-gray-800 rounded-lg mt-32 p-10 w-96 ">
      <h1 className="text-3xl font-medium">Join us today</h1>
      <div className="py-4">
        <h2 className="py-4">Sign in with one of the providers</h2>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={LoginGoogle}
          className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-4"
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
        <button onClick={loginFacebook} className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-4">
          <AiFillFacebook className="text-2xl text-blue-700" />
          Sign in with Facebook
        </button>
      </div>
    </div>
    </div>
  );
}
