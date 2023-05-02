import { useRouter } from "next/router";
import User from "./User";
import Link from "next/link";

export default function Header(){
    const router = useRouter();
    return(
        <header className="flex justify-between p-5 text-sm text-gray-700">
            <div className="flex space-x-4 items-center">
                <Link href="https://about.google.com/">
                    <a className="link">About</a>
                </Link>
                <Link href="https://store.google.com/">
                    <a className="link">Store</a>
                </Link>
            </div>
            <div className="flex space-x-4 items-center">
                <Link href="https://mail.google.com/">
                    <a className="link">Gmail</a>                
                </Link>
                <Link >
                    <a onClick={()=>router.push(`\search?term=${router.query.term || "google"}&searchType=image`)} className="link">Images</a>
                </Link>
                <User></User>
            </div>
        </header>
    )
}