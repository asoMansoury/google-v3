import Response from "@/Response";
import PaginationButtons from "@/components/PaginationButtons";
import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import Head from "next/head";
import { useRouter } from "next/router";


export default function search({results}) {
  const router = useRouter();
  return (
    <div>
        <Head>
            <title>{router.query.term} - Search page</title>
        </Head>

        {/*Searh Heaer */}
        <SearchHeader></SearchHeader>
        
        {/*Searh Results */}
        <SearchResults results= {results}></SearchResults>

        <PaginationButtons></PaginationButtons>
    </div>
  )
}

export async function getServerSideProps(context){
  const startIndex = context.query.start || "1";
  const mockData = false;
  const data =mockData? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}&start=${startIndex}`
  ).then((response)=>response.json());
  return {
    props:{
      results: data
    }
  };
   
}
