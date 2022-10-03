import Link from "next/link";
import {auth} from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Nav() {

  const [user, loading ] = useAuthState(auth);

  return (
    <nav className="flex items-center justify-between py-10">
      <Link href={"/doc"}>Logo</Link>
      <ul>
        { !user &&
          (<Link href={'/auth/login'}>
          <a className="py-2 px-4 bg-teal-700 text-white text-lg rounded-md ml-8 font-medium" href="">Join us</a>
         </Link>)
        }

        { user && (<div>
          <h2 className="font-medium">{user.displayName}</h2>
          <Link href={'/dashboard'}>
            <img src={user.photoURL}  className="w-12 rounded-full"/>
          </Link>
          </div>
        )}
      </ul>
    </nav>
  )
}
