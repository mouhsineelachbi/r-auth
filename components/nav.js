import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-10">
      <Link href={"/doc"}>Logo</Link>
      <ul>
        <Link href={'/auth/login'}>
         <a className="py-2 px-4 bg-teal-700 text-white text-lg rounded-md ml-8 font-medium" href="">Join us</a>
        </Link>
      </ul>
    </nav>
  )
}
