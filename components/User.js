import { useSession, signIn,signOut } from "next-auth/react";

export default function User({className}) {
  const {data:session} = useSession();
  if(session){
    return (
      <>
        <img onClick={signOut} src={session.user.image} className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`}></img>
      </>
    )
  }
  return (
    <>
      <button onClick={()=>signIn()} className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`}  alt="user-image" >Sign in</button>
    </>
  )

}
