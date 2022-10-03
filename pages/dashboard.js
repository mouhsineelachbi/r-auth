import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  if (loading) return <h2>loading ...</h2>;
  if (!user) router.push('/auth/login')
  if(user)
    return (
      <div>
        <h2>Welcome to dashboard {user.displayName}</h2>
        <button onClick={()=>auth.signOut()}>Sign out</button>
      </div>
    );
}
