import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <Head>
        <title>Google V3</title>
        <meta name='description' content='Generated by create next app'></meta>
        <link rel="icon" href='/favicon.ico'></link>
      </Head>

      <h1>Hello World!</h1>
    </div>
  )
}
