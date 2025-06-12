type Props = {
  name: string;
  age: number;
};


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            
            <h1>Home Page</h1>

            <User name= "ali"  age = {22} />
            <User name= "umer"/>


            {/* <User/>
            <User/> */}

      </main>
         </div>
  );
}


 const User=(props: Props)=>{

  return(
    <div>
    <h2>User Name is {props.name}</h2>
    <h1>User age is {props.age}</h1>
    </div>
  )

 }