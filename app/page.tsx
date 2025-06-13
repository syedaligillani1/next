'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"; 


type Props = {
  name: string;
  age: number;
  item : string
};

type ShowProps = {

  name : string ;
}

export default function Home() {

const Show=({name} : ShowProps)=>{

  return(
    <h1>hi {name}</h1>
)
  }

  const[count,setCount] = useState(0)

  const router = useRouter();

  function navtigate(routeName)
  {
    router.push(routeName)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            
            <h1>Home Page</h1>
            <button onClick={()=>setCount(count+1)}>Click me {count}</button> 


            <Show name = 'ali' />

            <Link href="/login">click here to go to login page</Link>  


            <Link href="/login/loginAuth/nested">click here to go to nested page</Link> 
            

            <button onClick={()=>navtigate('/login/loginAuth')}> LoginAuth page </button>

          
            <Link href="/user/123">Go to User 123</Link>  

            {/* 
            <User name= "ali"  age = {22} />
            <User name= "umer"/>  passing props to a component*/}

      </main>
         </div>
  );
}



 <Image
 src="./next.svg" //required
 width={500}
 height={500}
 alt="picture of ..." //required 
 />

 const User=(props: Props)=>{

  return(
    <div>
    <h2>User Name is {props.name}</h2>
    <h1>User age is {props.age}</h1>
    </div>
  )

 }

