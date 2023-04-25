import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react";
import {MicrophoneIcon,MagnifyingGlassIcon,XMarkIcon} from '@heroicons/react/24/solid';
import User from "./User";
export default function SearchHeader() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    function search(event){
        event.preventDefault();

        const term = searchInputRef.current.value;
        if(!term.trim()) return;
        router.push(`/search?term=${term.trim()}`);
    }

  return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
        <Image 
            onClick={()=>router.push("/")}
            src="https://www.vectorlogo.zone/logos/google/google-tile.svg"
            width={120}
            height={40}
            objectFit='contain'
            className="cursor-pointer"
          ></Image>
          <form className="flex flex-row border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
            <input 
                className="w-full focus:outline-none"
                type="text" defaultValue={router.query.term} ref={searchInputRef}></input>
            <XMarkIcon className="h-7 text-gray-500 cursor-pointer sm:mr-3" onClick={()=>{searchInputRef.current.value=""}}></XMarkIcon>
            <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3"></MicrophoneIcon>
            <MagnifyingGlassIcon className="h-6 hidden sm:inline-flex text-blue-500"></MagnifyingGlassIcon>
             <button onClick={search} stype="submit" hidden></button>
          </form>
          <User className='ml-auto whitespace-nowrap'></User>
        </div>
    </header>
  )
}
