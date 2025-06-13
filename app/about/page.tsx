"use client"

import { useRouter } from "next/navigation"


const about = () => {

    const router = useRouter()


  return (
    <div>
      <h1>This is about page</h1>
      <br />
      <button onClick={()=> router.push('/')}>Homepage</button>
    </div>
  )
}

export default about
