import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Header from '@/components/Header';
import {MagnifyingGlassIcon,MicrophoneIcon} from "@heroicons/react/24/solid";
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function searchFunc(event){
    event.preventDefault();
    const term = searchInputRef.current.value;
    if(!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  } 

  async function searchRandom(event){
    event.preventDefault();
    const term = await fetch("http://random-word-api.herokuapp.com/word?number1").then((response)=>response.json());
    if(!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  }
  return (
    <div >
      <Head>
        <title>Google V3</title>
        <meta name='description' content='Generated by create next app'></meta>
        <link rel="icon" href='/favicon.ico'></link>
      </Head>
      
        {/*Header */}
        <Header/>

        {/*Body */}
        <form className='flex flex-col items-center mt-40'>
          <Image 
            src="https://www.vectorlogo.zone/logos/google/google-tile.svg"
            width={300}
            height={100}
            objectFit='cover'
          ></Image>

          <div className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl'>
            <MagnifyingGlassIcon className='h-5 text-gray-500 mr-3'></MagnifyingGlassIcon>
            <input ref={searchInputRef} className='flex-grow focus:outline-none' type="text"></input>
            <MicrophoneIcon className='h-5'></MicrophoneIcon>
          </div>

          <div className='flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center'>
            <button onClick={searchFunc} className='btn'>Google Search</button>
            <button onClick={randomSearch} className='btn'>I&apos;m Feeling Lucky</button>
          </div>
        </form>

        <Footer></Footer>
    </div>


  )
}
