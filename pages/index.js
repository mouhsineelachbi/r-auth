import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Auth app</title>
        <meta name="description" content="Auth r app" />
      </Head>

      <main>
        <h1 className='text-2xl mt-10'>Upgrade your web development knowledge with us today</h1>
        <h3 className='text-xl'>Learn web and mobile latest technologies</h3>
      </main>
    </div>
  )
}
