import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>FinApp</title>
        <meta name="description" content="next finance app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='bold'>
          <h1 className='text-4xl'>Welcome to FinApp</h1>
        </div>
      </main>
    </div>
  )
}
