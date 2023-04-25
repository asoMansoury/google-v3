import SearchHeader from "@/components/SearchHeader";
import Head from "next/head";


export default function search() {
  return (
    <div>
        <Head>
            <title>Search Page</title>
        </Head>

        {/*Searh Heaer */}
        <SearchHeader></SearchHeader>
        
        {/*Searh Results */}
    </div>
  )
}
